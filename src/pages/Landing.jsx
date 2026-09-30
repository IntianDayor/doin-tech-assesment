import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import LogoStrip from "../components/sections/LogoStrip";
import CourseShowcase from "../components/sections/CourseShowcase";
import Categories from "../components/sections/Categories";
import CreatorFeature from "../components/sections/CreatorFeature";
import CreatorCTA from "../components/sections/CreatorCTA";
import Testimonials from "../components/sections/Testimonials";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <CourseShowcase />
      <Categories />
      <CreatorFeature />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </>
  );
}
