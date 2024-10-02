import Link from "next/link";
import React from "react";

function Card() {
  return (
    <article className="flex flex-col gap-4 w-64">
      <div className="aspect-[4/5] w-[100%] bg-gray-700 opacity-25 rounded-md"></div>

      <div className="flex flex-col gap-2">
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-100">
          Title
        </h4>

        <p className="line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
        <Link
          href="#"
          class="relative inline-block group text-primaryAccent uppercase"
        >
          Know More
          <span class="absolute left-0 bottom-0 w-0 h-[2px] bg-text transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </div>
    </article>
  );
}

export default Card;
