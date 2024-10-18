import Link from "next/link";
import React from "react";
import { links } from "@/utils/constants";

function Footer() {
  return (
    <>
      <footer className="bg-[#0F1115] py-12">
        <div>
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-gray-100 text-center">
            JNG Homes
          </h2>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {links.map((item, index) => {
              return (
                <li key={index} className="text-md">
                  <Link href={item?.link}>{item?.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500">Copyright &copy; 2024. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
