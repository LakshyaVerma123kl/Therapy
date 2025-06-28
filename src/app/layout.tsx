// layout.tsx
import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake - Clinical Psychologist | Therapy in Los Angeles",
  description:
    "Licensed clinical psychologist offering anxiety treatment, relationship counseling, and trauma recovery. In-person and virtual sessions available in Los Angeles, CA.",
  keywords:
    "therapist, psychologist, anxiety, therapy, counseling, Los Angeles, trauma, relationships",
  authors: [{ name: "Dr. Serena Blake" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Dr. Serena Blake - Clinical Psychologist",
    description:
      "Licensed clinical psychologist offering anxiety treatment, relationship counseling, and trauma recovery.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
