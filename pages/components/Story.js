import { useSession } from "next-auth/react";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const Story = () => {
  const { data: session } = useSession();
  return (
    <div className="relative w-[140px] h-[250px] cursor-pointer">
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocKb5FQHX2pXMIinuhw670siA0BIT62r0CRjrsFikz9OF9s=s360-c-no"
        className="w-full h-[75%] object-center rounded-md hover:scale-105"
      ></img>
      <div className="absolute left-[40%] top-[70%] rounded-full bg-white p-1 inline">
        <FaPlusCircle className="text-blue-500 text-3xl" />
      </div>
      <p className="mt-5 text-center font-bold">Create Story</p>
    </div>
  );
};

export default Story;
