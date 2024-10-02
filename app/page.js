import LandingVideo from "@/components/pages/LandingVideo";
import Projects from "@/components/pages/Projects";
import SliderPage from "@/components/pages/SliderPage";
import WelcomePage from "@/components/pages/WelcomePage";
import Heading from "@/components/shared/Heading";

export default function Home() {
  return (
    <>
      <LandingVideo></LandingVideo>
      <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto">
        <WelcomePage></WelcomePage>
        <Projects></Projects>
        <SliderPage></SliderPage>
        {/* <div className="w-full my-16 p-6 bg-primaryAccent text-black rounded-lg font-extrabold text-2xl text-center">
          <Heading text="tagline to be display here" color="black"></Heading>
        </div> */}
      </div>
    </>
  );
}
