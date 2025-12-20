"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

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

  // delete handler
  const handleDelete = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    if (!window.confirm("Delete this message permanently?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      alert(error.message);
    }
  };

  // search filter
  const filteredContacts = contacts.filter((c) =>
    [c.name, c.email, c.company, c.message]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <main className="min-h-screen flex bg-neutral-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neutral-200 bg-white px-6 py-10 flex flex-col">
        <h2 className="text-xl font-light tracking-tight text-neutral-800 mb-12">
          Zenvok Admin
        </h2>

        <nav className="flex flex-col gap-4">
          <button className="text-left text-neutral-700 hover:text-black transition text-sm">
            Dashboard
          </button>

          <button className="text-left text-neutral-700 hover:text-black transition text-sm">
            Notifications
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

        <div className="mt-auto pt-6 text-neutral-400 text-xs border-t border-neutral-200">
          Private Access Only
        </div>
      </aside>

      {/* Main */}
      <section className="flex-1 p-12">
        <h1 className="text-3xl font-light text-neutral-800 mb-10">
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
            <div className="flex justify-between items-center mb-6">
              <input
                type="text"
                placeholder="Search messages…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-72 bg-white border border-neutral-300 px-3 py-2 rounded-md text-sm text-neutral-700 outline-none focus:border-neutral-500 transition"
              />

              <button
                onClick={() => setContacts([...contacts].reverse())}
                className="text-xs border border-neutral-300 rounded-md px-3 py-2 text-neutral-600 hover:bg-neutral-100 transition"
              >
                Toggle Sort
              </button>
            </div>

            {/* table */}
            <div className="overflow-hidden border border-neutral-200 rounded-xl bg-white shadow-sm">
              <table className="w-full border-collapse">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="p-4 text-sm font-medium text-neutral-600">
                      Name
                    </th>
                    <th className="p-4 text-sm font-medium text-neutral-600">
                      Email
                    </th>
                    <th className="p-4 text-sm font-medium text-neutral-600">
                      Company
                    </th>
                    <th className="p-4 text-sm font-medium text-neutral-600">
                      Message
                    </th>
                    <th className="p-4 text-sm font-medium text-neutral-600 text-right">
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
                      <td className="p-4 text-sm">{c.name}</td>
                      <td className="p-4 text-sm">{c.email}</td>
                      <td className="p-4 text-sm">{c.company || "—"}</td>
                      <td className="p-4 text-sm whitespace-pre-wrap">
                        {c.message}
                      </td>
                      <td className="p-4 text-right text-sm">
                        <button
                          onClick={() => handleDelete(c._id)}
                          className="text-red-500 hover:text-red-700 underline text-xs"
                        >
                          delete
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
    </main>
  );
}
