import { Rating } from "@/components/common/Rating";

interface InformationProps {
  name: string;
  rating: number;
  city: string;
  address: string;
  description: string;
}

export const Information = ({
  name,
  rating,
  city,
  address,
  description,
}: InformationProps) => {
  return (
    <>
      <div className="-order-1 lg:order-1">
        <div className="mb-4 flex items-center gap-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <Rating rating={rating} />
        </div>

        <p>{`${city}, ${address}`}</p>

        <div className="my-2 h-[1px] bg-stone-200" />

        <p className="leading-loose">{description}</p>
      </div>
    </>
  );
};
