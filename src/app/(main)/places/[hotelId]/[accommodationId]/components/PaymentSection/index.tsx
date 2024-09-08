"use client";

import { Accommodation, Hotel, User } from "@/types/entities";

import { ConfirmationDialog } from "./components/ConfirmationDialog";
import { PaymentForm } from "./components/PaymentForm";

import { useComponent } from "./useComponent";

interface PaymentSectionProps {
  hotel: Hotel;
  accommodation: Accommodation;
  user: User | null;
}

export const PaymentSection = ({
  hotel,
  accommodation,
  user,
}: PaymentSectionProps) => {
  const { isConfirmationDialogOpen, paymentData, onPaymentConfirmed } =
    useComponent();

  return (
    <>
      <PaymentForm
        user={user}
        onPaymentConfirmed={onPaymentConfirmed}
      />

      <ConfirmationDialog
        isOpen={isConfirmationDialogOpen}
        hotel={hotel}
        accommodation={accommodation}
        paymentData={paymentData}
      />
    </>
  );
};
