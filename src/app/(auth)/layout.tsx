import Image from "next/image";

import authImg from "@/images/auth.jpg";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="grid h-dvh grid-cols-1 grid-rows-[1fr_2fr] md:grid-cols-2 md:grid-rows-1">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-2xl font-semibold">Fram</h1>

        {children}
      </div>

      <div className="relative -order-1 md:order-1">
        <Image
          src={authImg}
          alt="Banner"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />

        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-2 p-2 text-center text-white">
          <h2 className="text-2xl font-semibold lg:text-4xl">
            Find your own hotel
          </h2>

          <p className="text-sm lg:text-lg">
            Explore the most unusual places in Norway by our service
          </p>
        </div>
      </div>
    </main>
  );
}
