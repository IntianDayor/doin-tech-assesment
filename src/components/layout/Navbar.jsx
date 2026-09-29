import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-2">
      <span className="w-6 h-6 bg-secondary-500 rounded-full" />
      <span className="text-white font-heading font-semibold text-label-l">
        ByteSpace
      </span>
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-primary-800">
      <div className="container-bs h-[88px] flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Logo />
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "text-white text-label-m font-medium"
                  : "text-white/70 text-label-m";
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) => {
                return isActive
                  ? "text-white text-label-m font-medium"
                  : "text-white/70 text-label-m";
              }}
            >
              Courses
            </NavLink>
            <NavLink
              to="/creators"
              className={({ isActive }) => {
                return isActive
                  ? "text-white text-label-m font-medium"
                  : "text-white/70 text-label-m";
              }}
            >
              Creators
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-6">
            <Button variant="ghost" size="md" label="Sign In" />
            <Button variant="primary" size="md" label="Join Us" />
        </div>
      </div>
    </nav>
  );
}
