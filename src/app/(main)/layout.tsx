import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-dvh grid-rows-[max-content_1fr_max-content]">
      <Header />

      <main className="px-4 py-8">
        <div className="mx-auto h-full max-w-[1600px]">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
