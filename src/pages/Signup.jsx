import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Signup() {
  return (
    <main className="min-h-screen bg-primary-800 blue-grid flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 flex flex-col gap-6">
        <p className="text-label-s text-primary-800">Create an Account</p>
        <h1 className="font-heading text-heading-s text-neutral-950">
          Welcome to ByteSpace
        </h1>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-label-s text-neutral-950">Full Name</span>
            <input
              type="text"
              placeholder="Jamie Davis"
              className="h-12 rounded-xl border border-neutral-200 px-4 text-body-s outline-none focus:border-primary-800"
            />
          </label>
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

          <div className="mt-2"><Button variant="primary" size="lg" label="Continue" /></div>
        </form>

        <p className="text-body-s text-neutral-400 text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="text-primary-800 font-medium">
            Login
          </NavLink>
        </p>
      </div>
    </main>
  );
}
