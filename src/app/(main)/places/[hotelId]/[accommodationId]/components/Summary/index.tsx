import Image from "next/image";

import { Accommodation } from "@/types/entities";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import { formatPrice, getBookingPrices } from "@/lib";

interface SummaryProps {
  accommodation: Accommodation;
}

export const Summary = async ({ accommodation }: SummaryProps) => {
  const { vat, serviceFee, total } = getBookingPrices(
    Number(accommodation.price),
  );

  return (
    <>
      <div className="relative mb-4 h-[300px] overflow-hidden rounded-md">
        <Image
          src={accommodation.image}
          alt="Example view"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          placeholder={IMAGE_PLACEHOLDER}
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-[1fr_max-content] gap-y-3">
        <span>{`${accommodation.name} (Rooms: ${accommodation.numberOfRooms} / Beds: ${accommodation.numberOfBeds})`}</span>
        <span>{formatPrice(accommodation.price)}</span>

        <span>VAT</span>
        <span>{formatPrice(vat)}</span>

        <span>Service fee</span>
        <span>{formatPrice(serviceFee)}</span>

        <span className="font-medium">Total</span>
        <span className="font-medium">{formatPrice(total)}</span>
      </div>
    </>
  );
};
