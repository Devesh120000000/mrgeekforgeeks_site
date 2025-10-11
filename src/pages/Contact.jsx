import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    // reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center  py-16 px-4">
      <div className="w-[90%] max-w-4xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-8 md:p-16 text-gray-200">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Contact Us</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-auto bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-400 text-center mt-4">Your message has been sent!</p>
          )}
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-cyan-400 mb-2">Email</h3>
            <p>contact@mrgeekforgeeks.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-cyan-400 mb-2">Phone</h3>
            <p>+91 888888888</p>
          </div>
          <div>
            <h3 className="font-semibold text-cyan-400 mb-2">Location</h3>
            <p>India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
