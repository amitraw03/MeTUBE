import React from 'react'
import { useSearchParams } from 'react-router-dom';

const MainVideo = () => {
    const [searchParam] = useSearchParams();  // to get dynamic id of the videos ***MOST IMP*** PART 
    console.log(searchParam.get('v'));

  return (
    <div className='border-t-2 '>
    <div>
         <iframe width="850" height="470" 
            src={"https://www.youtube.com/embed/"+ searchParam.get('v')}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            autoPlay
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen></iframe>
    </div>
    <div className='flex mt-4'>
    <div className='space-x-1'>
    <button className="text-white px-2 py-1 border-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-yellow-500 hover:scale-110">Join 🫂</button>
    <button className="text-white px-2 py-1 border-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-green-600 hover:scale-110">Subscribe 🔔</button>
</div>
<div className="ml-32 space-x-1">
    <button className="text-white px-2 py-1 border-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-green-600 hover:scale-110">Like 👍</button>
    <button className="text-white px-2 py-1 border-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-red-600 hover:scale-110">Dislike 👎</button>
</div>
<div className="ml-32 space-x-1">
    <button className="text-white px-2 py-1 border-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-yellow-500 hover:scale-110">Share 🔁</button>
    <button className="text-white px-2 py-1 border-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-green-600 hover:scale-110">Download ⬇</button>
</div>
    </div><hr className='mt-4 border-t-2 '/>
    </div>
  )
}

export default MainVideo