import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { SignInFormData, signInSchema } from "@/types/schemas";

import { signIn } from "@/api/auth";

export const useComponent = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await signIn(values);
  });

  return { form, onSubmit };
};
