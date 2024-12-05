import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import ContractExecution from "./executeContract";

const AarcProvider = dynamic(() => import("../contexts/AarcProvider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aarc FundKit Widget NextJS Example",
  description: "Aarc FundKit Widget Example using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AarcProvider>{children}</AarcProvider>
        <ContractExecution />
      </body>
    </html>
  );
}
