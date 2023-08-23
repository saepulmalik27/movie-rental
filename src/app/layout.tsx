import Header from "@/components/templates/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { twMerge } from "tailwind-merge";
import { Providers } from "@/redux/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Rental App",
  description: "movie catalog and rental app by @saepulmalik27",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={twMerge(inter.className, "bg-brown")}>
        <Providers>
          <NextTopLoader
            color='#2299DD'
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing='ease'
            speed={200}
            shadow='0 0 10px #2299DD,0 0 5px #2299DD'
          />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
