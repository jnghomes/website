import "./globals.css";
import { Open_Sans } from "next/font/google";
import { LoadingProvider } from "@/utils/context/LoadingContext";
import LayoutPage from "@/components/shared/LayoutPage";
import { ThemeProvider } from "next-themes";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "JNG Homes",
  description: "JNG Homes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/logo-2.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
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
          <ThemeProvider attribute="data-theme">
            <LayoutPage children={children}></LayoutPage>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
