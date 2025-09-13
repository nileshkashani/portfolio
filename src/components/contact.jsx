import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-white py-20 shadow-md mt-3">
      <h2 className="text-3xl font-semibol text-blue-600 underline underline-offset-4 mb-12 font-poppins">
        Contact Me
      </h2>

      <form
        action="https://formspree.io/f/myzjdbqj"
        method="POST"
        className="w-full max-w-lg bg-blue-100 p-8 rounded-xl flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          required
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
