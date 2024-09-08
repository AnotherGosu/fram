import Link from "next/link";

export const SignUpLink = () => {
  return (
    <Link
      href="/sign-up"
      className="focus-ring text-sm text-stone-500 hover:underline"
    >
      Don&#39;t have an account? Sign up
    </Link>
  );
};
