import { Contacts } from "./components/Contacts";
import { Credits } from "./components/Credits";
import { Menu } from "./components/Menu";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 p-4">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-x-12 gap-y-6 text-white sm:grid-cols-2 md:grid-cols-3">
        <Credits />
        <Contacts />
        <Menu />
      </div>
    </footer>
  );
};
