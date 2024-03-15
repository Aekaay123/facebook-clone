import React from "react";
import LeftSideBarLink from "./LeftSideBarLink";
import { useSession } from "next-auth/react";
import { BsChevronDown } from "react-icons/bs";

const LeftSideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="fixed w-[300px] ">
      <div className="flex flex-col space-y-4 bg-white">
        <LeftSideBarLink
          image="https://lh3.googleusercontent.com/a/ACg8ocKb5FQHX2pXMIinuhw670siA0BIT62r0CRjrsFikz9OF9s=s360-c-no"
          text={session.user?.name}
        />
        <LeftSideBarLink image="/friends.png" text="Friends" />
        <LeftSideBarLink image="/group.png" text="Groups" />
        <LeftSideBarLink image="/market.png" text="Marketplace" />
        <LeftSideBarLink image="/pages.png" text="Pages" />
        <LeftSideBarLink image="/events.png" text="Events" />
        <LeftSideBarLink image="/most_recent.png" text="Most Recent" />

        <div className="flex items-center space-x-8 hover:bg-gray-300 p-2 rounded-md ">
          <BsChevronDown></BsChevronDown>
          <p className="font-bold text-md">See more</p>
        </div>
      </div>
    
      <div className="p-2 mt-40 flex flex-col space-y-4">
        <div className="flex justify-evenly">
          <button className="text-gray-600 hover:underline">Privacy</button>
          <button className="text-gray-600 hover:underline">Terms</button>
          <button className="text-gray-600 hover:underline">Advertising</button>
          <button className="text-gray-600 hover:underline">Adchoice</button>
        </div>
        <div className="flex justify-evenly">
          <button className="text-gray-600 hover:underline">Cookies</button>
          <button className="text-gray-600 hover:underline">More</button>
          <p>Meta &copy 2024</p>
        </div>
      </div>
    </div>
  );
};
export default LeftSideBar;
