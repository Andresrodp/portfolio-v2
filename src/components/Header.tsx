import BaselineMonitor from "@/components/icons/BaselineMonitor";
const Header = () => {
  return (
    <header className="h-16 flex fixed justify-around top-0 w-full px-10 bg-blackFolio opacity-80">
      <div className="flex items-center gap-2 text-slate-300">
        <BaselineMonitor />
        <span className="text-xl font-bold">Portfolio</span>
      </div>
      <nav className="gap-4 hidden xl:flex xl:justify-center xl:items-center text-slate-300">
        <a href="#aboutme">Sobre Mi</a>

        <a href="#projects">Proyectos</a>

        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
