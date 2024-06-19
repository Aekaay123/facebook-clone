import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const RightSideBar = () => {
  return (
    <div className="w-[300px] fixed right-0 top-[8%] flex flex-col space-y-6">
      <div className="flex items-center space-x-2">
        <img
          className="w-[130px]"
          src="/footage.png"
        ></img>
        <p>Enhance video footage to 8k</p>
      </div>
      <div className="border border-b-2  border-black/30"></div>
      <div className="flex justify-between items-center opacity-70 ">
        <p className="font-bold">Your pages and profiles</p>
        <button className="font-bold text-3xl">...</button>
      </div>
      <div className="border border-b-2 border-black/30"></div>
      <div className="flex justify-between p-2">
        <button className="text-md font-bold">Contacts</button>
        <button className="flex flex-row items-center">
          <AiOutlineSearch></AiOutlineSearch>
        </button>
      </div>
      <div className="flex flex-col space-y-4 overflow-scroll scrollbar-hide ">
        <div className="flex space-x-8 items-center">
          <img
            className="w-[50px] h-[50px] rounded-full object-center"
            src="https://th.bing.com/th?id=OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp&w=315&h=198&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          ></img>
          <p className="font-bold">Sonam Tshering</p>
        </div>

        <div className="flex space-x-8 items-center">
          <img
            className="w-[50px] h-[50px] rounded-full object-center"
            src="https://th.bing.com/th/id/OIP.7hGxdFyCLwofoL8uzdhoOgHaE8?w=303&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          ></img>
          <p className="font-bold">Sonam Phuntsho</p>
        </div>
        <div className="flex space-x-8 items-center">
          <img
            className="w-[50px] h-[50px] rounded-full object-center"
            src="https://th.bing.com/th/id/OIP.4Kbilsy9w_6UnUO2exETEAHaE7?w=304&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          ></img>
          <p className="font-bold">Karsel Dawa</p>
        </div>
        <div className="flex space-x-8 items-center">
          <img
            className="w-[50px] h-[50px] rounded-full object-center"
            src="https://th.bing.com/th/id/OIP.OoM0y86eNQv18jeTbrMFjAHaD6?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          ></img>
          <p className="font-bold">Kinley</p>
        </div>
        <div className="flex space-x-8 items-center">
          <img
            className="w-[50px] h-[50px] rounded-full object-center"
            src="https://th.bing.com/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          ></img>
          <p className="font-bold">Jigme Tenzin Chogyal</p>
        </div>
        <div className="flex space-x-8 items-center">
          <img
            className="w-[50px] h-[50px] rounded-full object-center"
            src="https://th.bing.com/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          ></img>
          <p className="font-bold">Sangay Passang</p>
        </div>
        
      </div>
      
    </div>
  );
};
export default RightSideBar;
