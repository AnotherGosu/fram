import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { User } from "@/types/entities";
import { ProfileFormData, profileSchema } from "@/types/schemas";

import { updateUser } from "@/api/auth";

import { NOTIFICATIONS } from "@/constants/alerts";

export const useComponent = (user: User) => {
  const form = useForm<ProfileFormData>({
    defaultValues: user,
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await updateUser(values);

      toast.success(NOTIFICATIONS.success.profileUpdate);
    } catch (err: any) {
      toast.error(err.message);
    }
  });

  return { form, onSubmit };
};
