import ChipSocialMedia from "./SocialMedia";

const AboutMe = () => {
  return (
    <main
      id="aboutme"
      className="h-[80vh] flex justify-center pt-16 w-full text-slate-400"
    >
      <aside></aside>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Hola, Soy Andrés Rodríguez.</h1>
        <p className="text-lg">
          Desarrollador web con 2 años de experiencia en tecnologías como HTML,
          CSS, JavaScript, React, Next.js, Vue, NuxtJs, Node.js, Express,
          PostgreSQL, entre otras. Siempre estoy abierto a aprender nuevas
          tecnologías y mejorar mis habilidades. Me considero proactivo, con
          capacidad de liderazgo, atento al detalle y con habilidades de
          comunicación.
        </p>
        <div></div>
      </div>
    </main>
  );
};

export default AboutMe;
