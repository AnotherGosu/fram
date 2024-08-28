import { generateKeys } from "@/lib";

export const PaginationFallback = () => {
  const keys = generateKeys(3);

  return (
    <div className="mt-6 flex gap-2">
      {keys.map((key) => (
        <div
          key={key}
          className="loader size-[38px] rounded-md"
        />
      ))}
    </div>
  );
};
