import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Jravio Detailing - Premium Auto Care",
  description: "Servicii de detailing auto premium in Bucuresti based on Apex Detailing standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
