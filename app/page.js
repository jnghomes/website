"use client";
import LandingVideo from "@/components/pages/LandingVideo";
import Projects from "@/components/pages/Projects";
import SliderPage from "@/components/pages/SliderPage";
import WelcomePage from "@/components/pages/WelcomePage";
import Preloader from "@/components/shared/Preloader";
import { useLoading } from "@/utils/context/LoadingContext";
import { useEffect } from "react";

export default function Home() {
  const { setLoading } = useLoading();

  return (
    <>
      <LandingVideo></LandingVideo>
      <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto">
        <WelcomePage></WelcomePage>
        <Projects></Projects>
        <SliderPage></SliderPage>
      </div>
      {/* <Preloader></Preloader> */}
    </>
  );
}
