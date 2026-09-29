import Button from "../components/ui/Button";
import SectionHeading from "../components/ui/SectionHeading";
import Navbar from "../components/layout/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main className="container-bs py-20">
        <h1 className="font-heading text-heading-l text-primary-800">
          ByteSpace
        </h1>
        <Button variant={"primary"} size={"md"} label={"Button1"} />
        <Button variant={"outline"} size={"md"} label={"Button2"} />
        <Button variant={"ghost"} size={"md"} label={"Button3"} />
        <Button variant={"primary"} size={"lg"} label={"Button4"} />
        <Button variant={"outline"} size={"lg"} label={"Button5"} />
        <Button variant={"ghost"} size={"lg"} label={"Button6"} />
        <SectionHeading
          title="ByteSpace"
          subtitle="A modern workspace."
          align="center"
        />
        <SectionHeading title="Test" subtitle="" align="left" />
      </main>
    </>
  );
}
