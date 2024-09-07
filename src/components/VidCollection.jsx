import React, { useEffect, useState } from 'react'
import { YOUTUBE_VID_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addVideoList } from '../utils/appSlice';

const VidCollection = () => {
  const dispatch=useDispatch();
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VID_API);
      const response = await data.json();
      // console.log('API Response:', response); 
      // console.log('Response Items:', response.items); 
      setVideos(response?.items);
      dispatch(addVideoList(response?.items));
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className='flex flex-wrap'>
      {videos.length > 0 &&
        videos.map((item, index) => (
          <Link key={item.id} to={'/watch?v=' + item.id}>
            <VideoCard info={item} />
          </Link>
        ))
      }
    </div>
  )
}

export default VidCollection