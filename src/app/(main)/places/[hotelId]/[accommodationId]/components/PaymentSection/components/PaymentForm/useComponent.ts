import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { User } from "@/types/entities";
import { PaymentFormData, paymentSchema } from "@/types/schemas";

export const useComponent = ({
  user,
  onPaymentConfirmed,
}: {
  user: User | null;
  onPaymentConfirmed: (formData: PaymentFormData) => void;
}) => {
  const form = useForm<PaymentFormData>({
    defaultValues: {
      cardholder: "",
      cardCVC: "",
      cardNumber: "",
      cardExpirationDate: "",
      email: user?.email || "",
      name: user?.name || "",
    },
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = form.handleSubmit((values) => {
    onPaymentConfirmed(values);
  });

  return { form, onSubmit };
};
