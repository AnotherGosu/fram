import { useState } from "react";

import { PaymentFormData } from "@/types/schemas";

export const useComponent = () => {
  const [paymentData, setPaymentData] = useState<PaymentFormData>({
    cardholder: "",
    cardCVC: "",
    cardNumber: "",
    cardExpirationDate: "",
    email: "",
    name: "",
  });

  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);

  const onPaymentConfirmed = (values: PaymentFormData) => {
    setPaymentData(values);
    setIsConfirmationDialogOpen(true);
  };

  return { isConfirmationDialogOpen, paymentData, onPaymentConfirmed };
};
