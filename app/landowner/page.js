"use client";
import Heading from "@/components/shared/Heading";
import { useLoading } from "@/utils/context/LoadingContext";
import React, { useEffect } from "react";
import WelcomePage from "@/components/pages/WelcomePage";
import VideoCard from "../../components/shared/VideoCard";
import * as motion from "framer-motion/client";
import { welcomePageParagraphsVideos } from "@/utils/constants";
import LandOwnerPage from "@/components/pages/LandOwner";
import Image from "next/image";

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
      <div className="flex flex-col gap-8 py-16">
        <Heading text="Land Owner/ Investor"></Heading>
        <div className="flex flex-row gap-8 py-16">
          <div className="flex flex-wrap gap-12 w-[80%] text-primaryText">
            <span>
              Hello Land owners! We , JNG Homes are always on the lookout for good land parcels for residential and commercial
              development. We would be delighted to receive more information about the land you have available.
              <br></br>
              To better evaluate the land, we kindly request you to provide us with the following details:
            </span>
            <div className="ml-8">
              <span>
                A. Location of the land by providing the Google coordinates. This will allow us to assess the area and its
                potential.
              </span>
            </div>
            <div className="ml-8">
              <span>
                B. Kindly provide the Information about the land, such as its size (in acres , square feet or square meters),
                zoning status (residential, commercial, mixed-use, etc.), any existing structures or developments on the land, and
                any other relevant details.
              </span>
            </div>
            <div className="ml-8">
              <span>
                C. Terms : Please specify whether the land is available for joint venture (JV) or for sale. If it is for sale,
                kindly mention the asking price or your expectations regarding the land's value. Additionally, if there are any
                specific terms and conditions associated with the land, such as development restrictions or legal considerations,
                please include those as well.
              </span>
            </div>
            <span>
              Once we receive the above information, our team will thoroughly evaluate the land's potential and its alignment with
              our development goals. If we find it suitable, we will get in touch with you to discuss the next steps and negotiate
              any necessary agreements.
            </span>
            Thank you once again for considering us as potential partners for your land development. We look forward to receiving
            the details and exploring the opportunity further as well.
          </div>
          <div className="flex flex-wrap gap-12 ">
            <LandOwnerPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
