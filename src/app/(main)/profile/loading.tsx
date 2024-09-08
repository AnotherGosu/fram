export default function Loading() {
  return (
    <section className="max-w-xl">
      <h2 className="mb-4 text-xl font-semibold">Profile</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="loader mt-[27px] h-[42px] rounded-md" />
        <div className="loader mt-[27px] h-[42px] rounded-md" />
        <div className="loader h-[38px] w-[83px] rounded-md" />
      </div>
    </section>
  );
}
