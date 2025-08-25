"use client";

import { useState } from "react";

export default function Contact() {
  
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      // Show exact error from backend
      alert("Failed to send message: " + (data.error || "Unknown error"));
      console.error("Server error:", data.error);
    }
  } catch (err: any) {
    console.error("Request error:", err);
    alert("Something went wrong: " + err.message);
  }
};

  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-10">
          Have a question, project idea, or just want to say hi? Fill out the form below, and I'll get back to you soon.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-400 focus:ring focus:ring-emerald-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-400 focus:ring focus:ring-emerald-500 outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-400 focus:ring focus:ring-emerald-500 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors py-3 px-6 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
