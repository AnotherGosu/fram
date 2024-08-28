import { Metadata } from "next";

import { getProfile } from "@/api/auth";

import { Label } from "@/components/common/Label";
import { TextInput } from "@/components/inputs/TextInput";

import { SignOutButton } from "./components/SignOutButton";

export const metadata: Metadata = {
  title: "Profile",
  description: "View your account information",
};

export default async function Page() {
  const profile = await getProfile();

  return (
    <>
      <section data-test="profile-section">
        <h2 className="mb-4 text-xl font-semibold">Profile</h2>

        <div className="mb-4 max-w-sm">
          <Label htmlFor="email">Email</Label>
          <TextInput
            id="email"
            defaultValue={profile}
            type="email"
            disabled
          />
        </div>

        <SignOutButton />
      </section>
    </>
  );
}
