import React from 'react'

const FriendsStory = ({profileImg,storyPic,name}) => {
  return (
    <div className='w-[140px] h-[250px] inline-block bg-cyan-400 relative rounded-lg cursor-pointer hover:scale-105 transition-all duration-300' >
        <img src={storyPic} className='w-full h-full opacity-80 rounded-md object-cover'></img>
        <div className='absolute top-2 left-2 rounded-full p-2 bg-black'>
            <img src={profileImg} className='w-[40px] h-[40px] rounded-full'></img>
        </div>
        <p className='absolute bottom-3 left-2 text-center font-bold '>{name}</p>

    </div>
  )
}

export default FriendsStory