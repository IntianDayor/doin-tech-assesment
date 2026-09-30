import Button from "../ui/Button";

const CANVAS_W = 1440;
const CANVAS_H = 1024;
const pct = (px, axis) => `${(px / (axis === "x" ? CANVAS_W : CANVAS_H)) * 100}%`;

export default function Hero() {
  return (
    <section className="relative bg-primary-800 blue-grid overflow-hidden">
      <img src="/src/assets/images/shapes/shape-spiral.png" alt="" className="hidden lg:block absolute left-[2%] top-[18%] w-[90px] opacity-95" />
      <img src="/src/assets/images/shapes/shape-spiral-dark.png" alt="" className="hidden lg:block absolute left-[11%] top-[36%] w-[70px] opacity-90" />
      <img src="/src/assets/images/shapes/shape-torus.png" alt="" className="hidden lg:block absolute left-[2%] bottom-[6%] w-[160px] opacity-95" />
      <img src="/src/assets/images/shapes/shape-triangle.png" alt="" className="hidden lg:block absolute right-[4%] top-[38%] w-[110px] opacity-95" />
      <img src="/src/assets/images/shapes/shape-cylinder.png" alt="" className="hidden lg:block absolute right-[-3%] top-[16%] w-[220px] opacity-95" />
      <img src="/src/assets/images/shapes/shape-spiral-dark-2.png" alt="" className="hidden lg:block absolute right-[3%] bottom-[10%] w-[80px] opacity-90" />

      <div
        className="relative mx-auto w-full max-w-[1440px]"
        style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-[3.5%] text-center w-[83%]"
          style={{ top: pct(169, "y") }}
        >
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-heading font-semibold text-white text-heading-s md:text-heading-m xl:text-heading-l leading-[1.2] max-w-[935px]">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="text-body-l text-neutral-100 max-w-xl">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white rounded-card h-[52px] px-6 w-[300px] sm:w-[461px]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-neutral-400">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="flex-1 h-full bg-transparent text-body-l text-neutral-950 placeholder:text-neutral-400 outline-none"
              />
            </div>
            <Button variant="primary" size="lg" label="Search" />
          </div>
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-secondary-400"
          style={{
            width: pct(1149, "x"),
            aspectRatio: "1 / 1",
            top: pct(582, "y"),
          }}
        />

        <img
          src="/src/assets/images/hero/hero-student.png"
          alt="Student using ByteSpace"
          className="absolute left-1/2 -translate-x-1/2 object-contain drop-shadow-2xl"
          style={{ width: pct(578, "x"), top: pct(512, "y") }}
        />

        <div
          className="hidden lg:flex absolute flex-col bg-white/95 backdrop-blur rounded-2xl p-4 gap-1"
          style={{ left: pct(404, "x"), top: pct(639, "y") }}
        >
          <p className="text-label-m font-medium text-neutral-950 whitespace-nowrap">UI/UX Design</p>
          <p className="text-body-xs text-neutral-400 whitespace-nowrap">200 Courses &bull; 1000+ Students</p>
        </div>

        <div
          className="hidden lg:flex absolute flex-col bg-white/95 backdrop-blur rounded-2xl p-4 gap-2 w-[232px]"
          style={{ left: pct(842, "x"), top: pct(651, "y") }}
        >
          <p className="text-label-s font-medium text-neutral-950">Learning Progress</p>
          <p className="font-heading text-heading-xs font-semibold text-neutral-950">55%</p>
          <div className="w-full h-2 rounded-card bg-neutral-50">
            <div className="h-2 rounded-card bg-secondary-400" style={{ width: "56%" }} />
          </div>
        </div>

        <div
          className="hidden lg:flex absolute flex-col bg-white/95 backdrop-blur rounded-2xl p-4 gap-2 w-[258px]"
          style={{ left: pct(328, "x"), top: pct(837, "y") }}
        >
          <p className="text-label-m font-medium text-neutral-950">Happy Students</p>
          <p className="text-body-xs text-neutral-400">4.5 (240) &#9733;</p>
          <div className="flex items-center mt-1">
            {[
              "avatar-woman-blue-hair",
              "avatar-man-hiker",
              "avatar-man-hat",
              "avatar-man-apron",
              "avatar-man-beard-1",
              "avatar-man-cyclist",
              "avatar-man-gray-beard",
            ].map((name, i) => (
              <img
                key={name}
                src={`/src/assets/images/avatars/${name}.png`}
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white object-cover -ml-3 first:ml-0"
                style={{ zIndex: i }}
              />
            ))}
            <span className="w-9 h-9 -ml-3 rounded-full bg-secondary-400 text-neutral-950 text-label-xs font-semibold flex items-center justify-center border-2 border-white">
              2K+
            </span>
          </div>
        </div>
      </div>

      <div className="lg:hidden container-bs pb-16 relative z-10">
        <div className="flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-secondary-400" />
            <img
              src="/src/assets/images/hero/hero-student.png"
              alt="Student using ByteSpace"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 sm:w-72 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
