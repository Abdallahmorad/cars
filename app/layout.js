import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Hub",
  description: "Discover The Best  Cars In The World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
