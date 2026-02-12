import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Jravio Detailing - Servicii Premium de Detailing Auto in Bucuresti",
  description: "Transforma-ti masina cu Jravio Detailing. Oferim servicii profesionale de folie PPF, polish auto, protectie ceramica si curatare tapiterie in Bucuresti. Calitate garantata.",
  keywords: "detailing auto bucuresti, folie ppf, protectie ceramica, polish auto, curatare tapiterie, jravio detailing",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#050505",
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
