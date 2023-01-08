import "../styles/globals.css";
import { Poppins, Inter } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
