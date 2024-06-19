import Login from "./components/Login";
import { getSession, signIn, useSession } from "next-auth/react";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Feed from "./components/Feed";

export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;
  return (
    <div className="">
      <Navbar />
      <LeftSideBar />
      <RightSideBar />
      <Feed/>
    </div>
  )
  
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session: session ? session : null,
    },
  };
}
