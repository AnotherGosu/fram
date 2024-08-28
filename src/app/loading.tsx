import { Loader } from "@/components/common/Loader";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="size-10" />
    </div>
  );
}
