export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      tech: "Next.js, Tailwind CSS",
    },
    {
      name: "E-Commerce Website",
      tech: "React.js, Firebase",
    },
    {
      name: "Blog Website",
      tech: "Next.js, MongoDB",
    },
  ];

  return (
    <section id="projects" className="p-20 bg-gray-100">
      <h2 className="text-4xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 shadow-lg rounded bg-white"
          >
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <p className="mt-2">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}