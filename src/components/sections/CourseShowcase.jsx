import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Chip from "../ui/Chip";
import CourseCard from "../ui/CourseCard";
import { courses } from "../../data/courses";
import { filterChips } from "../../data/categories";

export default function CourseShowcase() {
  const [activeChip, setActiveChip] = useState("Featured");

  return (
    <section className="py-20">
      <div className="container-bs flex flex-col gap-10">
        <SectionHeading
          align="center"
          title="Discover Your Passion, Build Your Skills"
          subtitle="At Bytespace Courses, we bring you closer to the ever-changing knowledge. Discover a variety of courses across different fields, from technology to life arts, and make a difference in your career life."
        />

        <div className="flex flex-wrap items-center justify-center gap-3">
          {filterChips.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              active={chip === activeChip}
              onClick={() => setActiveChip(chip)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
