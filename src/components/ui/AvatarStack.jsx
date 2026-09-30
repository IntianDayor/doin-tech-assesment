export default function AvatarStack({ images = [], extraLabel }) {
  return (
    <div className="flex items-center">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="w-8 h-8 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
        />
      ))}
      {extraLabel && (
        <span className="w-8 h-8 -ml-2 rounded-full bg-secondary-500 text-neutral-950 text-label-xs font-medium flex items-center justify-center border-2 border-white">
          {extraLabel}
        </span>
      )}
    </div>
  );
}
