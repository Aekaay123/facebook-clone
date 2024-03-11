import React from 'react'

const LeftSideBarLink = ({image,text}) => {
  return (
    <div className='flex items-center space-x-4 rounded-lg p-2 cursor-pointer w-[300px] hover:bg-gray-300'>
        <img className='h-[30px] w-[30px] rounded-full' src={image} alt="icons" ></img>
        <h1 className='text-md font-medium '>{text}</h1>
    </div>
  )
}

export default LeftSideBarLink