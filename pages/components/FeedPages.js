import React, { useEffect, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FaRegFaceLaughSquint } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const FeedPages = ({ profilePic, backgroundPic, pageName, time, caption }) => {
  return (
    <div className="flex flex-col space-x-4 bg-gray-400 mx-48 p-3 mt-3 rounded-lg ">
      <div className="flex space-x-2">
        <img className="w-[40px] h-[40px] rounded-full" src={profilePic}></img>
        <div className="flex justify-between w-full">
          <div>
            <p className="font-bold">{pageName}</p>
            <p>{time}</p>
          </div>
          <div className="flex space-x-3 items-center cursor-pointer">
            <HiOutlineDotsHorizontal size={20} className="font-bold" />
            <RxCross1
              className="cursor-pointer hover:scale-105 font-bold"
              size={20}
            />
          </div>
        </div>
      </div>

      <p className="text-md">{caption}</p>

      <div className="">
        <img className="w-full h-[500px] rounded-lg object-cover" src={backgroundPic}></img>
      </div>
      <div className="flex justify-between p-3">
        <button className="flex -gap-1">
          <BiLike size={25} className="text-blue-500 hover:scale-125 duration-300 " />
          <FaRegFaceLaughSquint size={25} className="text-red-500 hover:scale-125 duration-300 " />
          <FcLike size={25} className="text-yellow-500 hover:scale-125 duration-300" />
        </button>
        <div className="flex space-x-2">
          <FaComments className="hover:cursor-pointer" size={25} />
          <IoIosShareAlt className="hover:cursor-pointer" size={25} />
        </div>
      </div>
      <hr className="border-2 border-gray-500"></hr>
      <div className="flex justify-evenly mt-4">
        <div className="flex hover:bg-gray-500/50 px-4 py-1 hover:cursor-pointer rounded-lg">
          <BiLike size={25} className="" />
          <p>Like</p>
        </div>
        <div className="flex hover:bg-gray-500/50 px-4 group py-1 rounded-lg">
          <FaComments size={25} />
          <p className="group-hover:cursor-pointer">comments</p>
        </div>
        <div className="flex hover:bg-gray-500/50 px-4 py-1 group rounded-lg">
          <IoIosShareAlt size={25} />
          <p className="group-hover:cursor-pointer">share</p>
        </div>
      </div>
    </div>
  );
};

export default FeedPages;
