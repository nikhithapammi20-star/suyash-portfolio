"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_rizyiz4",
        "template_cz4b96n",
        form.current,
        "MxvdjO2DONd5335pc"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-gray-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-gray-800"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-3 rounded bg-gray-800"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}

      <div className="flex justify-center gap-8 mt-8 text-3xl">
        <a
          href="https://github.com/nikhithapammi20-star"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/nikhitha-reddy-27a16337"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a href="https://instagram.com/_gurl_2_0_" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}