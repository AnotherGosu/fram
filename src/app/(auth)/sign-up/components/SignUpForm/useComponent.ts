import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { SignUpFormData, signUpSchema } from "@/types/schemas";

import { signUp } from "@/api/auth";

export const useComponent = () => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: "", password: "", name: "", phone: "" },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await signUp(values);
  });

  return { form, onSubmit };
};
