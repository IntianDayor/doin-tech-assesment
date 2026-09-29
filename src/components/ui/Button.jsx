export default function Button({ variant, size, label }) {

  // Type of Buttons
  const variants = {
    primary:
      "bg-secondary-500 text-neutral-950 hover:bg-secondary-400 active:bg-secondary-600 rounded-full font-[Satoshi] font-medium",
    outline:
      "bg-white text-neutral-950 border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 rounded-full",
    ghost: "bg-transparent text-white hover:opacity-80 font-medium",
  };

  // Button Sizes
  const sizes = {
    md: "h-10 px-5 text-label-s",
    lg: "h-[45px] px-6 text-label-m",
  };

  // Shared Button Style
  const base =
    "inline-flex items-center justify-center gap-2 transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none";
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      onClick={() => {
        console.log(`${variant} button has been Clicked!`);
      }}
    >
      {label}
    </button>
  );
}
