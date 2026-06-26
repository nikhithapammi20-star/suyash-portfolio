export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="p-20">
      <h2 className="text-4xl font-bold">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 shadow-lg rounded bg-white text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}