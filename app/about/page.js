"use client"
import Heading from '@/components/shared/Heading'
import { useLoading } from '@/utils/context/LoadingContext';
import React, { useEffect } from 'react'

function page() {
  const { setLoading } = useLoading();
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className='w-full px-8 md:px-0 md:max-w-[80vw] mx-auto pt-24'>
    <Heading text="About Us"></Heading>
  </div>
  )
}

export default page