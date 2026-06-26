export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      tech: "Next.js, Tailwind CSS",
      image: "/project1.jpg",
      demo: "https://your-demo-link.com",
      code: "https://github.com/your-repo-link",
    },
    {
      name: "E-Commerce Website",
      tech: "React.js, Firebase",
      image: "/project2.jpg",
      demo: "https://your-demo-link.com",
      code: "https://github.com/your-repo-link",
    },
    {
      name: "Blog Website",
      tech: "Next.js, MongoDB",
      image: "/project3.jpg",
      demo: "https://your-demo-link.com",
      code: "https://github.com/your-repo-link",
    },
  ];

  return (
    <section id="projects" className="p-20 bg-gray-100">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="mt-2">{project.tech}</p>

              <div className="mt-4 flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  className="px-4 py-2 bg-black text-white rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}