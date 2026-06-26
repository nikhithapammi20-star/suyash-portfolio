export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/project1.jpg",
      description: "Modern personal portfolio website.",
      tech: "Next.js, TypeScript, Tailwind CSS",
      live: "https://your-live-demo-link.com",
      github: "https://github.com/yourusername/project1",
    },
    {
      title: "Dairy Assistant",
      image: "/project2.jpg",
      description: "AI-powered cattle disease detection system.",
      tech: "Flask, Python, Machine Learning",
      live: "https://your-live-demo-link.com",
      github: "https://github.com/nikhithapammi20-star/project2",
    },
    {
      title: "Cattle Health Monitoring",
      image: "/project3.jpg",
      description: "Health monitoring app for dairy cattle.",
      tech: "Flask, OpenCV, AI",
      live: "https://your-live-demo-link.com",
      github: "https://github.com/nikhithapammi20-star/project3",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <p className="mt-3 text-sm font-semibold">
                Tech: {project.tech}
              </p>

              <div className="flex gap-4 mt-5">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 text-white rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}