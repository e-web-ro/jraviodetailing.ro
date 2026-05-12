import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Jravio Detailing - Servicii Premium de Detailing Auto in Bucuresti",
  description: "Transforma-ti masina cu Jravio Detailing. Oferim servicii profesionale de folie PPF, polish auto, protectie ceramica si curatare tapiterie in Bucuresti. Calitate garantata.",
  keywords: "detailing auto bucuresti, folie ppf, protectie ceramica, polish auto, curatare tapiterie, jravio detailing",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18101580803"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18101580803');
          `}
        </Script>
      </head>
      <body>
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
