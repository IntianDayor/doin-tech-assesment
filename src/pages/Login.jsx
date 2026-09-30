import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Login() {
  return (
    <main className="min-h-screen bg-primary-800 blue-grid flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 flex flex-col gap-6">
        <p className="text-label-s text-primary-800">Sign In</p>
        <h1 className="font-heading text-heading-s text-neutral-950">
          Welcome Back
        </h1>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-label-s text-neutral-950">Email</span>
            <input
              type="email"
              placeholder="designer@example.com"
              className="h-12 rounded-xl border border-neutral-200 px-4 text-body-s outline-none focus:border-primary-800"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-label-s text-neutral-950">Password</span>
            <input
              type="password"
              placeholder="••••••••"
              className="h-12 rounded-xl border border-neutral-200 px-4 text-body-s outline-none focus:border-primary-800"
            />
          </label>

          <div className="mt-2"><Button variant="primary" size="lg" label="Sign In" /></div>
        </form>

        <div className="flex items-center gap-3">
          <span className="flex-1 h-px bg-neutral-100" />
          <span className="text-body-xs text-neutral-400">or</span>
          <span className="flex-1 h-px bg-neutral-100" />
        </div>

        <div className="flex items-center justify-center gap-4">
          <button className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-label-m">f</button>
          <button className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-label-m">G</button>
        </div>

        <p className="text-body-s text-neutral-400 text-center">
          New user?{" "}
          <NavLink to="/signup" className="text-primary-800 font-medium">
            Create an account
          </NavLink>
        </p>
      </div>
    </main>
  );
}
