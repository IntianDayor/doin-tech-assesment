import AvatarStack from "./AvatarStack";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-card border border-neutral-100 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-label-m font-medium text-neutral-950 line-clamp-1">
            {course.title}
          </h3>
          <span className="text-label-s text-neutral-950 shrink-0">
            {course.rating} ★
          </span>
        </div>
        <p className="text-body-s text-neutral-400">by {course.author}</p>
        <div className="flex items-center justify-between">
          <AvatarStack images={[]} extraLabel={course.students} />
          <span className="text-label-s text-neutral-400">{course.level}</span>
        </div>
        <p className="text-label-m font-semibold text-primary-800">
          ${course.price}
          <span className="text-body-xs text-neutral-400 font-normal">/lifetime</span>
        </p>
      </div>
    </div>
  );
}
