import { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Toaster } from "sonner";

import { StoreProvider } from "@/utils/provider";

import "./globals.css";

const font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Fram", template: "%s • Fram" },
  description:
    "Booking and hotel searching service. Find your best place to stay in Norway",
  applicationName: "Fram",
  keywords: ["Fram", "Norway", "Hotel", "Booking", "Accommodation"],
  generator: "Next.js",
  authors: { name: "Maksim Dubinin", url: "https://anothergosu.com" },
  creator: "Maksim Dubinin",
  publisher: "Maksim Dubinin",
  openGraph: {
    title: "Fram",
    description:
      "Booking and hotel searching service. Find your best place to stay in Norway",
    url: "https://fram.vercel.app",
    siteName: "Fram",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StoreProvider>
          {children}
          <Toaster
            toastOptions={{ className: font.className }}
            data-test="toast"
          />
        </StoreProvider>
      </body>
    </html>
  );
}
