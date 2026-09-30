import Button from "../ui/Button";

export default function CreatorCTA() {
  return (
    <section className="relative bg-primary-800 blue-grid py-20 overflow-hidden">
      <img
        src="/src/assets/images/shapes/shape-spiral.png"
        alt=""
        className="hidden md:block absolute left-8 top-8 w-28 opacity-90"
      />
      <img
        src="/src/assets/images/shapes/shape-triangle.png"
        alt=""
        className="hidden md:block absolute right-12 bottom-8 w-20 opacity-90"
      />
      <div className="container-bs relative z-10 flex flex-col items-center text-center gap-6">
        <h2 className="font-heading text-heading-s md:text-heading-m text-white max-w-2xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-body-m text-white/80 max-w-xl">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize
          our Course Editor, and showcase your expertise by publishing your
          finest course on the ByteSpace Course Library.
        </p>
        <Button variant="primary" size="lg" label="Join as Creator" />
      </div>
    </section>
  );
}
