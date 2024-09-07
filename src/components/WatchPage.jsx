import React from 'react'
import MainVideo from './MainVideo'
import SideVideos from './SideVideos'

const WatchPage = () => {
   
    return (
        <div className='mt-2 flex space-x-4'>
          <MainVideo/> 
          <div className='w-4/12  overflow-y-scroll h-screen' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <SideVideos/>
          </div>
        </div>
    )
}

export default WatchPage