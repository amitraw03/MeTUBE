import React from 'react'
import VideoFilter from './VideoFilter'
import VidCollection from './VidCollection'

const MainContainer = () => {
    return (
        <div className='w-10/12 bg-orange-600'>
            <VideoFilter />
            <VidCollection/>
        </div>
    )
}

export default MainContainer