export default function Services() {
  const services = [
    "Frontend Development",
    "Responsive Web Design",
    "UI/UX Implementation",
    "Landing Page Design"
  ];

  return (
    <section id="services" className="p-20">
      <h2 className="text-4xl font-bold mb-10">Services</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-xl">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}