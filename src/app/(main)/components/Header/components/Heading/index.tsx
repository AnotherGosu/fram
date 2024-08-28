import Link from "next/link";

export const Heading = () => {
  return (
    <h1 className="text-2xl font-semibold">
      <Link
        href="/"
        className="focus:outline-blue-300"
      >
        Fram
      </Link>
    </h1>
  );
};
