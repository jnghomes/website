"use client";
import { useLoading } from "@/utils/context/LoadingContext";
import React, { useEffect } from "react";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { usePathname } from "next/navigation";

function LayoutPage({ children }) {
  const { loading, setLoading } = useLoading();
  const path=usePathname()

  useEffect(() => {
    setLoading(true);

    const simulatePageLoad = () => {
      setLoading(false);
    };

    const loadTimeout = setTimeout(simulatePageLoad, 1500);

    return () => clearTimeout(loadTimeout);
  }, [setLoading,path]);

  return (
    <>
      {loading ? (
        <Preloader></Preloader>
      ) : (
        <>
          <CustomCursor></CustomCursor>
          <Navbar></Navbar>
          <div className="min-h-screen">{children}</div>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default LayoutPage;
