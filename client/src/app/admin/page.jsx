"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState(null);

  const [toast, setToast] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setError("Not authenticated");
      setLoading(false);
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) throw new Error(data.message);
        setContacts(data.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const confirmDelete = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact/${pendingDeleteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      setContacts((prev) => prev.filter((c) => c._id !== pendingDeleteId));

      setShowModal(false);
      setPendingDeleteId(null);

      setToast("Contact deleted");
      setTimeout(() => setToast(""), 2000);
    } catch (err) {
      alert(err.message);
    }
  };

  const filteredContacts = contacts.filter((c) =>
    [c.name, c.email, c.company, c.message]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="md:w-64 w-full md:h-auto h-16 border-b md:border-b-0 md:border-r border-neutral-200 bg-white px-6 py-4 md:py-10 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-6">
        <h2 className="text-lg md:text-xl font-light tracking-tight text-neutral-800">
          zenvok.studio
        </h2>

        <nav className="hidden md:flex flex-col gap-4 mt-6">
          <button className="text-left text-neutral-700 hover:text-black transition text-sm">
            Dashboard
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              window.location.href = "/admin/login";
            }}
            className="text-left text-neutral-700 hover:text-black transition text-sm"
          >
            Logout
          </button>
        </nav>

        {/* mobile logout */}
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin/login";
          }}
          className="md:hidden text-neutral-500 text-sm hover:text-black transition"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <section className="flex-1 p-4 sm:p-6 md:p-12">
        <h1 className="text-2xl md:text-3xl font-light text-neutral-800 mb-6 md:mb-10">
          Dashboard
        </h1>

        {loading && <p className="text-neutral-500">Fetching leads…</p>}
        {error && (
          <p className="text-red-500 border-l-2 border-red-400 pl-3 text-sm mb-4">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            {/* controls */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
              <input
                type="text"
                placeholder="Search messages…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full md:w-72 bg-white border border-neutral-300 px-3 py-2 rounded-md text-sm text-neutral-700 outline-none focus:border-neutral-500 transition"
              />

              <button
                onClick={() => setContacts([...contacts].reverse())}
                className="text-xs border border-neutral-300 rounded-md px-3 py-2 text-neutral-600 hover:bg-neutral-100 transition"
              >
                Toggle Sort
              </button>
            </div>

            {/* table container */}
            <div className="overflow-x-auto border border-neutral-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="p-3 sm:p-4 font-medium text-neutral-600">
                      Name
                    </th>
                    <th className="p-3 sm:p-4 font-medium text-neutral-600">
                      Email
                    </th>
                    <th className="p-3 sm:p-4 font-medium text-neutral-600">
                      Company
                    </th>
                    <th className="p-3 sm:p-4 font-medium text-neutral-600">
                      Message
                    </th>
                    <th className="p-3 sm:p-4 font-medium text-neutral-600 text-right">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredContacts.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="p-6 text-center text-neutral-400 text-sm"
                      >
                        No matching results
                      </td>
                    </tr>
                  )}

                  {filteredContacts.map((c) => (
                    <tr
                      key={c._id}
                      className="border-b border-neutral-200 hover:bg-neutral-100/60 transition"
                    >
                      <td className="p-3 sm:p-4">{c.name}</td>
                      <td className="p-3 sm:p-4 break-all">{c.email}</td>
                      <td className="p-3 sm:p-4">{c.company || "—"}</td>
                      <td className="p-3 sm:p-4 whitespace-pre-wrap">
                        {c.message}
                      </td>

                      <td className="p-3 sm:p-4 text-right">
                        <button
                          onClick={() => {
                            setPendingDeleteId(c._id);
                            setShowModal(true);
                          }}
                          className="text-neutral-500 hover:text-red-600 transition p-1 rounded cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      {/* Delete Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white shadow-lg rounded-xl px-6 py-5 sm:px-8 sm:py-6 max-w-sm mx-auto border border-neutral-200 transition w-full">
            <h2 className="text-neutral-800 text-lg font-light mb-4">
              Delete message?
            </h2>

            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              This action cannot be reversed. The message will be permanently
              removed.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setPendingDeleteId(null);
                }}
                className="text-neutral-500 hover:text-neutral-700 text-sm"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-neutral-900 text-white text-sm px-4 py-2 rounded-md shadow-md animate-fadeIn z-50">
          {toast}
        </div>
      )}
    </main>
  );
}
