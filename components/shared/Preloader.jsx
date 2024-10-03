import React from "react";

function Preloader() {
  return (
    <div className=" flex justify-center items-center w-screen h-screen bg-background overflow-hidden">
      <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Preloader;
