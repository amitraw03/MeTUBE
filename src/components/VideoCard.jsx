import React from 'react'

const VideoCard = ({info}) => {
      // console.log(info);   
      const {snippet, statistics }=info;
      const {thumbnails ,channelTitle ,publishedAt, title}=snippet;
     
      // Function to format numbers
const formatNumber = (number) => {
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1) + 'M';
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(1) + 'K';
  } else {
    return number.toString();
  }
};

  return (
    <div className='w-[345px] mx-4 my-8 hover:scale-105 transition duration-300 ease-in-out transform'>
    <div className='w-full'>
      <img alt='vid-img' className='rounded-lg w-full' src={thumbnails.medium.url}/>
      <h2 className='text-white mt-2 line-clamp-2 h-12'>{title}</h2>
      <h3 className='text-zinc-500 font-semibold mt-1'>{channelTitle} ✪</h3>
    </div>
    <div className='flex space-x-3'>
      <p className='text-zinc-500'>{formatNumber(statistics.viewCount)} Views</p>
      <p className='text-zinc-500'>• {publishedAt.slice(0, 10)}</p>
    </div>
  </div>
  
  )
}

export default VideoCard