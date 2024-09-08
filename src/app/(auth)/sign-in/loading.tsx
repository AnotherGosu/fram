export default function Loading() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <div className="loader mt-[27px] h-[42px] rounded-md" />
      <div className="loader mt-[27px] h-[42px] rounded-md" />
      <div className="loader h-[38px] rounded-md" />
      <div className="loader mx-auto h-[20px] w-[205px]" />
    </div>
  );
}
