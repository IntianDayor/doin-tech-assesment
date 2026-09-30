const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function CreatorFeature() {
  return (
    <section className="py-20 bg-primary-50/40">
      <div className="container-bs grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: image + floating cards + stats */}
        <div className="relative">
          <img
            src="/src/assets/images/hero/hero-student.png"
            alt="Student learning"
            className="w-full max-w-sm mx-auto object-contain"
          />
          <div className="hidden md:flex absolute top-4 left-0 flex-col gap-1 bg-white rounded-2xl shadow-lg px-4 py-3">
            <p className="text-label-s text-neutral-400">Learning Progress</p>
            <p className="text-label-l font-semibold text-neutral-950">55%</p>
          </div>

          <div className="flex gap-6 mt-8 justify-center">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-heading-xs text-neutral-950">{s.value}</p>
                <p className="text-body-xs text-neutral-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: copy */}
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-heading-s text-neutral-950">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="text-body-m text-neutral-400 max-w-md">
            Explore our curated selection of courses tailored to enhance your
            skillset and accelerate your career journey. Whether you are
            looking to strengthen specific skills, gain majority expertise,
            or embark on a new career path entirely, we have the resources
            you need.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <h3 className="font-heading text-heading-xs text-neutral-950">
              Create & Manage Courses Easily.
            </h3>
            <p className="text-body-m text-neutral-400 max-w-md">
              Bytespace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-2">
              {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-body-s text-neutral-950">
                    <span className="w-5 h-5 rounded-full bg-secondary-500 flex items-center justify-center text-[10px]">✓</span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
