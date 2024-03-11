import React from "react"
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import {signIn} from "next-auth/react"
const Login = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-500 ">
        
        <img className="object-cover w-full h-screen" src="https://th.bing.com/th/id/OIP.yX2CySv1fMjRbdsRCDJhXQHaE6?rs=1&pid=ImgDetMain"></img>
        
        <div className="w-2/4 h-[75%] mt-20 mx-auto bg-gray-500 flex gap-0 rounded-xl absolute top-0 left-[25%] opacity-90">
          <div className="h-full  w-1/2 flex bg-green-400 items-center justify-center rounded-lg">
            <BsFacebook size={200}></BsFacebook>
          </div>
          <div className="flex flex-col w-1/2 space-y-10 p-4 ">
            <h1 className="text-center font-bold text-3xl ">Login</h1>
            <form className="relative flex flex-col space-y-6 p-3 mt-6">
              <input
                type="text"
                placeholder="Type your username"
                className="p-2 bg-gray-400 rounded focus:outline-none placeholder:text-gray-600"
              ></input>
              <input
                type="password"
                placeholder="Type your password here.."
                className="p-2 bg-gray-400 rounded focus:outline-none placeholder:text-gray-600"
              ></input>
              <button
                type="submit"
                className="bg-black p-2 rounded-lg font-bold hover:bg-blue-400 text-white"
              >
                Sign in
              </button>
              <div className="flex justify-between">
                <p></p>
                <a href="#" className="cursor-pointer hover:underline">
                  Forgot password?
                </a>
              </div>
            </form>
            <div className="flex items-center">
              <div className=" border-2 border-t border-gray-200 flex-grow"></div>
              <p className="mx-4 font-bold">OR</p>
              <div className="border-2 border-t border-gray-200 flex-grow"></div>
            </div>
            <div className="flex flex-col space-y-3 justify-evenly ">
              <button onClick={()=>signIn("google")} className="flex justify-evenly items-center  bg-white rounded-xl shadow-2xl">
                <FcGoogle size={50}></FcGoogle>
                <p>Sign in using google</p>
              </button>
              <button className="flex justify-evenly items-center bg-white rounded-xl shadow-2xl">
                <FaGithubSquare size={50}></FaGithubSquare>
                <p>Sign in using github</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;