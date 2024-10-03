import "./globals.css";
import { Open_Sans } from "next/font/google";
import { LoadingProvider } from "@/utils/context/LoadingContext";
import LayoutPage from "@/components/shared/LayoutPage";

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
      <LoadingProvider>
        <LayoutPage children={children}></LayoutPage>
        </LoadingProvider>
      </body>
    </html>
  );
}
