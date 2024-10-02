import React from "react";

function VideoCard({ index }) {
  return (
    <article
      className={
        index % 2 !== 0
          ? "flex flex-col justify-between lg:flex-row gap-4 w-[100%] "
          : "flex flex-col justify-between lg:flex-row-reverse gap-4 w-[100%]"
      }
    >
      <div className="aspect-[16/9] w-[100%] lg:w-[45%] bg-gray-700 opacity-25 rounded-md"></div>

      <div className="flex flex-col gap-2 w-[100%] lg:w-[45%]">
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-100 ">
          Title
        </h4>
        <span className="w-64 h-[1px] bg-primaryAccent"></span>
        <p className="text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </article>
  );
}

export default VideoCard;
