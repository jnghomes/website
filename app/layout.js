// import localFont from "next/font/local";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/shared/Footer";
import CustomCursor from "@/components/shared/CustomCursor";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Task",
  description: "Task given by Nilesh Bhai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add external styles here */}
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </head>
      <body className={openSans.className}>
        <CustomCursor></CustomCursor>
        <Navbar></Navbar>
        <div className="min-h-screen">

        {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
