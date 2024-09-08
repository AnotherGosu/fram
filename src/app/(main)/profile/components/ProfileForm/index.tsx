"use client";

import { User } from "@/types/entities";

import { Button } from "@/components/common/Button";
import { FormError } from "@/components/common/FormError";
import { Label } from "@/components/common/Label";
import { TextInput } from "@/components/inputs/TextInput";

import { useComponent } from "./useComponent";

interface ProfileFormProps {
  user: User;
}

export const ProfileForm = ({ user }: ProfileFormProps) => {
  const { form, onSubmit } = useComponent(user);

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-2 gap-4"
    >
      <div data-test="email-field">
        <Label
          htmlFor="email"
          required
        >
          Email
        </Label>

        <TextInput
          id="email"
          type="email"
          required
          readOnly
          {...form.register("email", { required: true })}
        />

        <FormError error={form.formState.errors.email?.message} />
      </div>

      <div data-test="name-field">
        <Label
          htmlFor="name"
          required
        >
          Name
        </Label>

        <TextInput
          id="name"
          {...form.register("name")}
        />

        <FormError error={form.formState.errors.name?.message} />
      </div>

      <Button
        type="submit"
        disabled={!form.formState.isDirty}
        isLoading={form.formState.isSubmitting}
        className="w-max"
        data-test="submit-button"
      >
        Update
      </Button>
    </form>
  );
};
