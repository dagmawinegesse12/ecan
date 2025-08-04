// src/pages/contact.tsx

import type { NextPage } from "next";
import { useState, FormEvent } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((fd) => ({ ...fd, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: replace with your API endpoint or Formspree URL
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", comments: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Banner */}
      <div className="bg-green-600 py-12">
        <div className="max-w-4xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-2 text-lg">
            Have questions? Drop us a message and we’ll get back to you soon!
          </p>
        </div>
      </div>

      {/* Form */}
      <main className="flex-1 bg-gray-50 py-16">
        <div className="max-w-xl mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label htmlFor="comments" className="block font-medium mb-1">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={5}
                required
                value={formData.comments}
                onChange={handleChange}
                placeholder="What can we help you with?"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className={`
                  inline-block px-8 py-3 rounded-lg text-white font-semibold
                  transition
                  ${status === "sending" ? "bg-green-300" : "bg-green-600 hover:bg-green-700"}
                `}
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </div>

            {status === "success" && (
              <p className="text-center text-green-600 font-medium">
                Thanks! We’ve received your message.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-600 font-medium">
                Oops! Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
