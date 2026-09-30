import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-2 shrink-0">
      <img
        src="/src/assets/images/logo.svg"
        alt="ByteSpace"
        className="w-[29px] h-[31px]"
      />
      <span className="text-neutral-50 font-display font-bold text-[24px]">
        ByteSpace
      </span>
    </NavLink>
  );
}

const navLinkClass = ({ isActive }) =>
  `text-neutral-50 text-label-m ${isActive ? "font-medium" : "font-normal"}`;

export default function Navbar() {
  return (
    <nav className="bg-primary-800 blue-grid">
      <div className="container-bs h-[120px] grid grid-cols-3 items-center">
        <div className="justify-self-start">
          <Logo />
        </div>

        <div className="justify-self-center flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/courses" className={navLinkClass}>
            Courses
          </NavLink>
          <NavLink to="/creators" className={navLinkClass}>
            Creators
          </NavLink>
        </div>

        <div className="justify-self-end flex items-center gap-6">
          <NavLink to="/login" className="text-neutral-50 text-label-m font-normal">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="text-neutral-50 text-label-m font-normal">
            Join Us
          </NavLink>
          <button type="button" aria-label="Cart" className="text-neutral-50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 7V6a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 .93l1 13A1 1 0 0 1 21 22H3a1 1 0 0 1-1-1.07l1-13A1 1 0 0 1 4 7h2Zm2 0h8V6a4 4 0 1 0-8 0v1Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
