export default function Chip({ label, active = false, onClick }) {
  const base =
    "inline-flex items-center h-10 px-5 rounded-full text-label-s whitespace-nowrap transition-colors duration-150";
  const state = active
    ? "bg-secondary-500 text-neutral-950"
    : "bg-white text-neutral-950 border border-neutral-200 hover:border-neutral-400";

  return (
    <button type="button" onClick={onClick} className={`${base} ${state}`}>
      {label}
    </button>
  );
}
