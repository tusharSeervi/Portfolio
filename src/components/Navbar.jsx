import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center flex justify-center font-bold shadaow-md"
      >
        <p className="blue-gradient_text">TC</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/certifications"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Certifications
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
