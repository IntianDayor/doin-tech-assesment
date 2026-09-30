const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

export default function LogoStrip() {
  return (
    <section className="bg-neutral-50 py-8">
      <div className="container-bs flex flex-wrap items-center justify-center gap-10">
        {logos.map((logo, i) => (
          <span key={i} className="text-label-m text-neutral-400 font-medium">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
