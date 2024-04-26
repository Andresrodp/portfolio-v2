import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
export default function Home() {
  return (
    <main className="flex w-full lg:max-w-[1080px] h-auto flex-col items-center justify-between p-24">
      <AboutMe />
      <Projects />
      <ContactMe />
    </main>
  );
}
