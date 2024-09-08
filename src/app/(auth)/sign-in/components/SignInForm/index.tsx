"use client";

import { Button } from "@/components/common/Button";
import { FormError } from "@/components/common/FormError";
import { Label } from "@/components/common/Label";
import { TextInput } from "@/components/inputs/TextInput";

import { useComponent } from "./useComponent";

export const SignInForm = () => {
  const { form, onSubmit } = useComponent();

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-xs flex-col gap-4"
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
          {...form.register("email", { required: true })}
        />

        <FormError error={form.formState.errors.email?.message} />
      </div>

      <div data-test="password-field">
        <Label
          htmlFor="password"
          required
        >
          Password
        </Label>

        <TextInput
          id="password"
          type="password"
          {...form.register("password", { required: true })}
        />

        <FormError error={form.formState.errors.password?.message} />
      </div>

      <Button
        type="submit"
        isLoading={form.formState.isSubmitting}
        data-test="submit-button"
      >
        Sign in
      </Button>
    </form>
  );
};
