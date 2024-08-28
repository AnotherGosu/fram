import { Authentication } from "./components/Authentication";
import { Heading } from "./components/Heading";
import { Navigation } from "./components/Navigation";
import { NavigationMenu } from "./components/NavigationMenu";

export const Header = () => {
  return (
    <header className="p-4">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <Heading />
        <Navigation />
        <Authentication />
        <NavigationMenu />
      </div>
    </header>
  );
};
