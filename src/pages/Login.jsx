import { NavLink } from "react-router-dom";
import Button from "../components/ui/Button";
import CourseCard from "../components/ui/CourseCard";
import { courses } from "../data/courses";

const previewCourses = courses.slice(1, 3);

export default function Login() {
  return (
    <main className="min-h-screen bg-primary-800 blue-grid flex flex-col">
      <div className="pt-9 pl-[122px]">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/src/assets/images/logo.svg" alt="ByteSpace" className="w-[29px] h-[31px]" />
          <span className="text-neutral-50 font-display font-bold text-[24px]">ByteSpace</span>
        </NavLink>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-16 lg:py-8">
        <div className="flex flex-col gap-10 max-w-[475px] w-full">
          <div className="flex flex-col gap-4 text-white">
            <h2 className="font-heading text-heading-xs font-semibold">
              Sign in with ease
            </h2>
            <p className="text-body-l text-neutral-100">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          <div className="hidden lg:flex relative items-start gap-4 pl-6">
            <img
              src="/src/assets/images/shapes/shape-cone-dark.png"
              alt=""
              className="absolute -left-4 top-16 w-16 opacity-90"
            />
            <div className="w-52 scale-95 -rotate-3 shadow-2xl rounded-card overflow-hidden">
              <CourseCard course={previewCourses[0]} />
            </div>
            <div className="w-52 rotate-2 shadow-2xl rounded-card overflow-hidden -ml-6 mt-8">
              <CourseCard course={previewCourses[1]} />
            </div>
            <div className="absolute -bottom-6 left-10 bg-secondary-400 rounded-2xl p-4 flex flex-col gap-1 shadow-xl">
              <p className="text-label-m font-medium text-neutral-950">Happy Students</p>
              <p className="text-body-xs text-neutral-800">4.5 (240) &#9733;</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[579px] bg-white rounded-card p-8 sm:p-[63px] flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-body-l text-primary-800">Sign In</p>
            <h1 className="font-heading text-heading-m font-semibold text-neutral-950">
              Welcome Back
            </h1>
          </div>

          <form className="flex flex-col gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-label-s font-medium text-neutral-950">Email</span>
              <input
                type="email"
                placeholder="designer@example.com"
                className="h-[52px] rounded-xl border border-neutral-100 px-6 text-body-l text-neutral-950 placeholder:text-neutral-400 outline-none focus:border-primary-800"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-label-s font-medium text-neutral-950">Password</span>
              <input
                type="password"
                placeholder="********"
                className="h-[52px] rounded-xl border border-neutral-100 px-6 text-body-l text-neutral-950 placeholder:text-neutral-400 outline-none focus:border-primary-800"
              />
            </label>

            <div><Button variant="primary" size="lg" label="Sign In" /></div>
          </form>

          <div className="flex items-center gap-3">
            <span className="flex-1 h-px bg-neutral-100" />
            <span className="text-body-s text-neutral-400">or</span>
            <span className="flex-1 h-px bg-neutral-100" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <button type="button" aria-label="Continue with Facebook" className="w-11 h-11 rounded-full border border-neutral-100 flex items-center justify-center text-label-m">f</button>
            <button type="button" aria-label="Continue with Google" className="w-11 h-11 rounded-full border border-neutral-100 flex items-center justify-center text-label-m">G</button>
          </div>

          <p className="text-body-m text-neutral-700 text-center">
            New user?{" "}
            <NavLink to="/signup" className="text-primary-800">
              Create an account
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  );
}
