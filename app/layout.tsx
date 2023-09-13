import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aribnb",
  description: "Aribnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel="submit" isOpen title="hello" />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
