import React from 'react'

const VideoFilter = ({info}) => {
    
  return (
    <div className='flex overflow-x-auto whitespace-nowrap mt-3 -mb-2 '
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
       { 
        info.map((item,index)=>(
          <button key={index} style={{ backgroundColor: '#232426' }}
          className='px-3 py-1 my-3 mx-4 text-white border-1 rounded-lg transition-colors duration-300 ease-in-out  hover:text-yellow-300'>
            {item}</button>
        ))
       }
    </div>
  )
}

export default VideoFilter