import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

import { Accommodation, Hotel } from "@/types/entities";
import { PaymentFormData } from "@/types/schemas";

import { formatPrice, getBookingPrices } from "@/lib";

import { Button } from "@/components/common/Button";

interface ConfirmationDialogProps {
  isOpen: boolean;
  hotel: Hotel;
  accommodation: Accommodation;
  paymentData: PaymentFormData;
}

export const ConfirmationDialog = ({
  isOpen,
  hotel,
  accommodation,
  paymentData,
}: ConfirmationDialogProps) => {
  const { cardholder, cardNumber, email, name } = paymentData;

  const { total } = getBookingPrices(Number(accommodation.price));

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-950/50 data-[state=open]:animate-overlayShow" />

        <Dialog.Content
          aria-describedby={undefined}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 flex w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 rounded-md bg-white p-4 sm:p-8"
        >
          <Dialog.Title className="mb-4 text-center text-xl font-semibold">
            Booking confirmed
          </Dialog.Title>

          <p>
            Thank you, <b>{name}</b>! Your reservation is complete. A
            confirmation email has been sent to <b>{email}</b>. Please check
            your inbox for full details.
          </p>

          <section>
            <h3 className="mb-2 text-lg font-medium">Booking details</h3>

            <div className="grid grid-cols-2 text-sm sm:text-base">
              <span>Reservation number:</span>
              <span>#ABC-123456-FRAM</span>

              <span>Hotel:</span>
              <span>{hotel.name}</span>

              <span>Accommodation:</span>
              <span>{`${accommodation.name} (Rooms: ${accommodation.numberOfRooms} / Beds: ${accommodation.numberOfBeds})`}</span>
            </div>
          </section>

          <section>
            <h3 className="mb-2 text-lg font-medium">Payment details</h3>

            <div className="grid grid-cols-2 text-sm sm:text-base">
              <span>Cardholder name:</span>
              <span>{cardholder}</span>

              <span>Card number:</span>
              <span>{cardNumber}</span>

              <span>Total amount paid:</span>
              <span>{formatPrice(total)}</span>
            </div>
          </section>

          <p>Safe travels, and thank you for using our service.</p>

          <Button
            asChild
            className="mx-auto w-max"
          >
            <Link href="/places">Return to home page</Link>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
