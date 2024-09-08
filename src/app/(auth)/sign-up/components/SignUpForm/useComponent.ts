import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { SignUpFormData, signUpSchema } from "@/types/schemas";

import { signUp } from "@/api/auth";

export const useComponent = () => {
  const form = useForm<SignUpFormData>({
    defaultValues: { email: "", password: "", name: "" },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await signUp(values);
    } catch (err: any) {
      toast.error(err.message);
    }
  });

  return { form, onSubmit };
};
