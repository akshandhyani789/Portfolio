import React from 'react'
import { useState } from 'react';

function ContactForm() {

    const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const res = await fetch("https://formspree.io/f/mnjzeyzr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
    
   setTimeout(() => {
    setStatus("")
   }, 3000); 
  };


  return (
    <form
          className="flex flex-col gap-4 w-full max-w-md"
          onSubmit={handleSubmit}
          method='POST'
        >
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-200 rounded p-2"
            onChange={handleChange}
            value={form.name}
            placeholder="Your Name"
            required
          />

          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-200 rounded p-2"
            onChange={handleChange}
            value={form.email}
            placeholder="Your Email"
            required
          />

          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <textarea
            id="message"
            className="bg-gray-200 rounded p-2 h-32"
            onChange={handleChange}
            value={form.message}
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-900 transition flex items-center gap-2 justify-center disabled:opacity-50"
          >
            <i className="fa-solid fa-paper-plane"></i>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="text-sm text-center">{status}</p>}
        </form>

  )
}

export default ContactForm
