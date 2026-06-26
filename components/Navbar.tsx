export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white p-4 flex justify-between z-50">
      <h1 className="text-xl font-bold">Suyash</h1>

      <ul className="flex gap-6">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}