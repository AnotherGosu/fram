import Image from "next/image";
import Link from "next/link";

import notFoundImg from "@/images/not-found.jpg";

export default function NotFound() {
  return (
    <main className="h-dvh w-screen">
      <Image
        src={notFoundImg}
        alt="Not Found"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-2 text-center text-white">
        <h2 className="text-2xl font-bold">Not Found</h2>

        <div className="text-lg">
          Looks like this place is abandoned.
          <br />
          Let&#39;s find you something better on{" "}
          <Link
            href="/"
            className="font-medium underline"
          >
            Home Page
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
