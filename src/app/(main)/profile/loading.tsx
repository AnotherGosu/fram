export default function Loading() {
  return (
    <section className="max-w-xl">
      <h2 className="mb-4 text-xl font-semibold">Profile</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="mb-1 inline-block text-sm font-medium">Email</span>
          <div className="loader h-[42px] rounded-md" />
        </div>

        <div>
          <span className="mb-1 inline-block text-sm font-medium">Name</span>
          <div className="loader h-[42px] rounded-md" />
        </div>

        <div className="loader h-[38px] w-[83px] rounded-md" />
      </div>
    </section>
  );
}
