import { Metadata } from "next";

import { getCurrentUser } from "@/api/auth";

import { ProfileForm } from "./components/ProfileForm";

export const metadata: Metadata = {
  title: "Profile",
  description: "View your account information",
};

export default async function Page() {
  const user = await getCurrentUser();

  return (
    <section
      className="max-w-xl"
      data-test="profile-section"
    >
      <h2 className="mb-4 text-xl font-semibold">Profile</h2>

      <ProfileForm user={user!} />
    </section>
  );
}
