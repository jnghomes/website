import React from 'react'

function Heading({text,color}) {
  return (
    <h1 className={color?"scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl text-black":"scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-100"}>
      {text}
    </h1>
  )
}

export default Heading