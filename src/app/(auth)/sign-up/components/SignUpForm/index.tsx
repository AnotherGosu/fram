"use client";

import { Button } from "@/components/common/Button";
import { Label } from "@/components/common/Label";
import { TextInput } from "@/components/inputs/TextInput";

import { useComponent } from "./useComponent";

export const SignUpForm = () => {
  const { form, onSubmit } = useComponent();

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-xs flex-col gap-4"
    >
      <div>
        <div className="flex justify-between">
          <Label
            required
            htmlFor="email"
          >
            Email
          </Label>

          <span className="text-xs text-red-500">
            {form.formState.errors.email?.message}
          </span>
        </div>

        <TextInput
          id="email"
          type="email"
          {...form.register("email")}
        />
      </div>

      <div>
        <div className="flex justify-between">
          <Label
            required
            htmlFor="password"
          >
            Password
          </Label>

          <span className="text-xs text-red-500">
            {form.formState.errors.password?.message}
          </span>
        </div>

        <TextInput
          id="password"
          type="password"
          {...form.register("password")}
        />
      </div>

      <div>
        <div className="flex justify-between">
          <Label htmlFor="name">Name</Label>

          <span className="text-xs text-red-500">
            {form.formState.errors.name?.message}
          </span>
        </div>

        <TextInput
          id="name"
          {...form.register("name")}
        />
      </div>

      <div>
        <div className="flex justify-between">
          <Label htmlFor="phone">Phone number</Label>

          <span className="text-xs text-red-500">
            {form.formState.errors.phone?.message}
          </span>
        </div>

        <TextInput
          id="phone"
          type="tel"
          {...form.register("phone")}
        />
      </div>

      <Button
        type="submit"
        isLoading={form.formState.isSubmitting}
        data-test="sign-up-button"
      >
        Sign up
      </Button>
    </form>
  );
};
