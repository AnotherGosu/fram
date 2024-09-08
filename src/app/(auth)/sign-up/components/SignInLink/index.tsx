import Link from "next/link";

export const SignInLink = () => {
  return (
    <Link
      href="/sign-in"
      className="focus-ring text-sm text-stone-500 hover:underline"
    >
      Already have an account? Sign in
    </Link>
  );
};
