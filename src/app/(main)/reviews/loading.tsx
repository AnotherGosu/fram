import { Loader } from "@/components/common/Loader";

export default function Loading() {
  return (
    <div className="flex h-full items-center justify-center">
      <Loader className="size-8" />
    </div>
  );
}
