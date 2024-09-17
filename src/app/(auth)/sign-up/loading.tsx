export default function Loading() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <div>
        <span className="mb-1 inline-block text-sm font-medium">Email</span>
        <div className="loader h-[42px] rounded-md" />
      </div>

      <div>
        <span className="mb-1 inline-block text-sm font-medium">Password</span>
        <div className="loader h-[42px] rounded-md" />
      </div>

      <div>
        <span className="mb-1 inline-block text-sm font-medium">Name</span>
        <div className="loader h-[42px] rounded-md" />
      </div>

      <div className="loader h-[38px] rounded-md" />

      <div className="loader mx-auto h-[20px] w-[215px]" />
    </div>
  );
}
