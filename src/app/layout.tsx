import type { Metadata } from "next";
import { csBold, csBoldMix, csMedium } from "@/lib/fonts";
import { asset } from "@/lib/asset";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenwich - Cultural Services",
  description: "Greenwich Cultural Services - Brand activation through art",
  authors: [{ name: "Ilia Goncharov" }],
  icons: {
    icon: asset("/favicon/favicon-1.ico"),
  },
  openGraph: {
    title: "Greenwich - Cultural Services",
    description: "Brand activation through art",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${csMedium.variable} ${csBold.variable} ${csBoldMix.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
