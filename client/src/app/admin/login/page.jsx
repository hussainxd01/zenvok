"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log("Admin logged in:", data);

      // later → redirect to admin dashboard
      // router.push("/admin");
    } catch (err) {
      console.error(err);
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm border border-white/10 p-8">
        <p className="text-xs tracking-widest text-gray-400 mb-4">
          ZENVOK — ADMIN
        </p>

        <h1 className="text-white text-2xl font-light mb-10">Sign In</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-gray-700 focus-within:border-white transition">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent text-white placeholder-gray-500 py-2 outline-none text-sm"
            />
          </div>

          <div className="border-b border-gray-700 focus-within:border-white transition">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full bg-transparent text-white placeholder-gray-500 py-2 outline-none text-sm"
            />
          </div>

          {error && (
            <p className="text-xs text-gray-400 border-l border-white/30 pl-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full border border-white text-white py-3 text-sm font-light hover:bg-white hover:text-black transition disabled:opacity-40"
          >
            {loading ? "Authenticating…" : "Enter"}
          </button>
        </form>

        <p className="text-[10px] text-gray-600 mt-8">
          Restricted access. Authorized personnel only.
        </p>
      </div>
    </main>
  );
}
