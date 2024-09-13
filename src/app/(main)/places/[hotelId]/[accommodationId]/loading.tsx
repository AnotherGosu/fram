export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <section className="max-w-2xl">
          <h2 className="mb-4 text-xl font-semibold">Booking summary</h2>

          <div className="loader mb-4 h-[300px] rounded-md" />

          <div className="flex flex-col gap-3">
            <div className="loader h-[24px]" />
            <div className="loader h-[24px]" />
            <div className="loader h-[24px]" />
            <div className="loader h-[24px]" />
          </div>
        </section>

        <section className="max-w-2xl">
          <h2 className="mb-4 text-xl font-semibold">Payment options</h2>

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-[2fr_1fr] gap-4">
              <div>
                <span className="mb-1 inline-block text-sm font-medium">
                  Cardholder name
                </span>
                <div className="loader h-[42px] rounded-md" />
              </div>

              <div>
                <span className="mb-1 inline-block text-sm font-medium">
                  CVC
                </span>
                <div className="loader h-[42px] rounded-md" />
              </div>

              <div>
                <span className="mb-1 inline-block text-sm font-medium">
                  Card number
                </span>
                <div className="loader h-[42px] rounded-md" />
              </div>

              <div>
                <span className="mb-1 inline-block text-sm font-medium">
                  MM/YY
                </span>
                <div className="loader h-[42px] rounded-md" />
              </div>
            </div>

            <div className="h-[1px] bg-slate-200" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <span className="mb-1 inline-block text-sm font-medium">
                  Email
                </span>
                <div className="loader h-[42px] rounded-md" />
              </div>

              <div>
                <span className="mb-1 inline-block text-sm font-medium">
                  Name
                </span>
                <div className="loader h-[42px] rounded-md" />
              </div>
            </div>

            <div className="loader h-[38px] w-[151px] rounded-md" />
          </div>
        </section>
      </div>
    </>
  );
}
