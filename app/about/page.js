"use client";
import Heading from "@/components/shared/Heading";
import { useLoading } from "@/utils/context/LoadingContext";
import React, { useEffect } from "react";
import WelcomePage from "@/components/pages/WelcomePage";

function page() {
  const { setLoading } = useLoading();
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto pt-24">
      {/* <Heading text="About Us"></Heading> */}
      <WelcomePage></WelcomePage>
    </div>
  );
}

export default page;
