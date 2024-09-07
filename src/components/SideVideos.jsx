import React from 'react';
import { useSelector } from 'react-redux';

const SideVideos = () => {
    const videoList = useSelector((store) => store.app.videoList);
    console.log('Video List:', videoList);

    return (
        <div className="side-videos">
            {videoList && videoList.length > 0 ? (
                videoList.map((video) => {
                    const { id, snippet } = video;
                    return (
                        <div key={id} className="video-item flex ">
                            <div className=' w-3/6'>
                                <img className='w-[200px] -mt-1'
                                    src={snippet?.thumbnails?.default?.url}
                                    alt={snippet?.title}
                                /></div>
                            <div className='ml-2 my-2 w-3/6'>
                                <h3 className='text-white'>{snippet?.title.slice(0,50)}...</h3>
                                <p className='text-zinc-500  cursor-pointer font-serif'>{snippet?.channelTitle} ✪</p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No videos available</p>
            )}
        </div>
    );
}

export default SideVideos;
