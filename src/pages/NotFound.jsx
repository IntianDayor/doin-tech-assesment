import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary-800 blue-grid flex items-center justify-center text-center px-6">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-heading text-heading-l text-secondary-500">404</h1>
        <p className="text-body-m text-white/80 max-w-sm">
          The page you are looking for doesn't exist.
        </p>
        <NavLink to="/">
          <Button variant="primary" size="md" label="Back to Home" />
        </NavLink>
      </div>
    </main>
  );
}
