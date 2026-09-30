import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container-bs flex flex-col gap-10">
        <SectionHeading
          align="left"
          title="Discover What Our Community Is Saying"
          subtitle="At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-card border border-neutral-100 p-6 flex flex-col gap-4"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-body-s text-neutral-950">{t.quote}</p>
              <div>
                <p className="text-label-s font-medium text-neutral-950">{t.name}</p>
                <p className="text-body-xs text-neutral-400">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
