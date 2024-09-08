import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { SignInFormData, signInSchema } from "@/types/schemas";

import { signIn } from "@/api/auth";

export const useComponent = () => {
  const form = useForm<SignInFormData>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await signIn(values);
    } catch (err: any) {
      toast.error(err?.message);
    }
  });

  return { form, onSubmit };
};
