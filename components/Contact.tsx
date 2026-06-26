export default function Contact() {
  return (
    <section id="contact" className="p-20 bg-black text-white">
      <h2 className="text-4xl font-bold">Contact Me</h2>

      <form className="flex flex-col gap-4 mt-6 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="p-3 text-black rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="p-3 text-black rounded"
        />

        <textarea
          placeholder="Message"
          className="p-3 text-black rounded"
        ></textarea>

        <button className="bg-blue-500 p-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}