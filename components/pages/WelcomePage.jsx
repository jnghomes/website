import React from 'react'
import Heading from '../shared/Heading'
import VideoCard from '../shared/VideoCard';

function WelcomePage() {
  return (
    <div className='flex flex-col gap-8 py-16'>
        <Heading text="Welcome to ###"></Heading>
        <div class="columns-1 md:columns-2 text-sm/relaxed text-gray-500 text-justify">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque ipsum non mauris condimentum, nec blandit libero
          fermentum. Curabitur non nisi libero. Donec consectetur nisi ut diam
          placerat, et convallis nunc gravida. Etiam ullamcorper suscipit
          mauris, ac fermentum eros viverra in. Proin convallis arcu id libero
          aliquet, ut dapibus turpis ultricies. Vivamus bibendum est nec eros
          vehicula, ut vehicula felis dictum. Vestibulum volutpat consequat
          lacus, id vehicula mi aliquet nec.
        </p>
      </div>
        <div className="flex flex-wrap gap-12 w-[100%] justify-center">
        {[1, 2, 3].map((item) => {
          return <VideoCard key={item} index={item}></VideoCard>;
        })}
      </div>
    </div>
  )
}

export default WelcomePage