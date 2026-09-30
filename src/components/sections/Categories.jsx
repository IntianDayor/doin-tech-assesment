import SectionHeading from "../ui/SectionHeading";
import { exploreCategories } from "../../data/categories";

export default function Categories() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-bs flex flex-col gap-10">
        <SectionHeading
          align="center"
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, meeting learners wherever they are, in their curated journey."
        />

        <div className="flex flex-wrap items-center justify-center gap-6">
          {exploreCategories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center justify-center gap-3 bg-white rounded-card border border-neutral-100 w-[167px] h-[167px]"
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-label-s text-neutral-950">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
