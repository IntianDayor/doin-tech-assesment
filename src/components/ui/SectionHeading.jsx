export default function SectionHeading({ title, subtitle, align = "left" }) {
  const wrapperClasses =
    "flex flex-col gap-2" +
    (align === "center"
      ? " items-center text-center mx-auto"
      : " items-start text-left");

  const titleClasses =
    "font-heading text-heading-s md:text-heading-m text-neutral-950";

  const subtitleClasses = "text-body-m text-neutral-400 max-w-2xl";

  return (
    <div className={wrapperClasses}>
      <h2 className={titleClasses}>{title}</h2>

      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </div>
  );
}