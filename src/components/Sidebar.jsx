import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-2/12 bg-black h-screen'>
            <ul className='text-gray-300 my-4 ml-5 font-bold'>
                <li >Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul><hr  className='w-5/6'/>
            <h1 className='text-gray-300 font-bold ml-4'>YOU </h1>
            <ul className='text-gray-300 font-semibold my-4 ml-5'>
                <li>Library</li>
                <li>History</li>
                <li>Watch later</li>
            </ul><hr className='w-5/6'/>
            <h1 className='text-gray-300 font-bold ml-4'>Explore</h1>
            <ul className='text-gray-300 font-semibold my-4 ml-5'>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Live</li>
                <li>News</li>
            </ul><hr  className='w-5/6'/>
            <ul className='text-gray-300 my-4 ml-5 font-bold'>
                <li>Settings</li>
                <li>Report history</li>
                <li>Help</li>
                <li>Send feedback</li>
            </ul>
        </div>
    )
}

export default Sidebar