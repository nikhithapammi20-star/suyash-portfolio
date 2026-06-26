import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

      <form className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded text-black"
        />

        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded text-black"
        />

        <textarea
          placeholder="Message"
          className="p-3 rounded text-black"
        ></textarea>

        <button className="bg-blue-500 p-3 rounded">
          Send Message
        </button>
      </form>

      <div className="flex gap-6 mt-8 text-3xl">
        <a href="https://github.com/nikhithapammi20-star/suyash-portfolio" target="_blank">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/in/nikhitha-reddy-27a16337b" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://instagram.com/_gurl_2_0_" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}