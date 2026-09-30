import { NavLink } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <>
      <div className="bg-primary-800 blue-grid relative overflow-hidden">
        <Navbar />
        <div className="relative flex flex-col items-center text-center px-6 pt-8 pb-32">
          <p
            className="font-heading font-semibold leading-none tracking-tight select-none pointer-events-none text-[22vw] sm:text-[18vw] lg:text-[400px] -mb-[10vw] lg:-mb-[140px]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgb(212,251,32) 0%, rgba(212,251,32,0.96) 25%, rgba(212,251,32,0.81) 50.5%, rgba(212,251,32,0.61) 68%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            404
          </p>

          <div className="relative flex flex-col items-center gap-8 max-w-3xl">
            <h1 className="font-heading text-heading-s lg:text-heading-l font-semibold text-white">
              The page you are looking for doesn&rsquo;t exist
            </h1>
            <p className="text-body-l text-neutral-100">
              Try to use a correct url or go back to homepage to start again
            </p>
            <NavLink to="/">
              <Button variant="primary" size="lg" label="Back to Home" />
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
