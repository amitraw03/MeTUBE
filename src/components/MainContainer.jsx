import React from 'react';
import VideoFilter from './VideoFilter';
import VidCollection from './VidCollection';

const MainContainer = () => {
  const List = ['All', 'Podcasts', 'Colleges', 'Top', 'Live', 'Tourism', 'Comedy', 'Recently uploaded', 'New to you', 'Gaming', 'Data Structures', 'Esports', 'Sources'];
  
  return (
    <div className="w-full bg-black">
      <VideoFilter info={List} />
      <VidCollection />
    </div>
  );
};

export default MainContainer;