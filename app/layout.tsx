import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import Provider from "./provider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={`${poppins.variable} font-sans text-gray-700`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
