import React from "react";
import Story from "./Story";
import FriendsStory from "./FriendsStory";
import { useSession } from "next-auth/react";
import FeedPages from "./FeedPages";

const Feed = () => {
  const { data: session } = useSession();
  return (
    <div className="mx-[300px] max-w-4xl h-full bg-white  overflow-x-scroll scrollbar-hide mt-16 ">
      <div className="flex space-x-3">
        <Story/>
        <FriendsStory
          profileImg="/friends.png"
          storyPic="https://th.bing.com/th/id/OIP.MaREGjoEghJGdd6p7uHWlgHaIt?w=163&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          name="Kencho Wangdi"
        />

        <FriendsStory
          profileImg="https://randomuser.me/api/portraits/women/2.jpg"
          storyPic="https://source.unsplash.com/random/800x600?2"
          name="Jane Smith"
        />

        <FriendsStory
          profileImg="https://randomuser.me/api/portraits/men/3.jpg"
          storyPic="https://source.unsplash.com/random/800x600?3"
          name="Mike Johnson"
        />

        <FriendsStory
          profileImg="https://randomuser.me/api/portraits/women/4.jpg"
          storyPic="https://source.unsplash.com/random/800x600?4"
          name="Emily Brown"
        />

        <FriendsStory
          profileImg="https://randomuser.me/api/portraits/men/5.jpg"
          storyPic="https://source.unsplash.com/random/800x600?5"
          name="Alex Williams"
        />
      </div>
      <div className="flex space-x-2 items-center bg-white p-2 mx-48 mt-8 border-2 rounded-lg">
        <div className="flex flex-col  w-full items-center">
          <div className="flex space-x-2 w-full items-center">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocKb5FQHX2pXMIinuhw670siA0BIT62r0CRjrsFikz9OF9s=s360-c-no"
              className="w-[70px] h-[70px] rounded-full"
            ></img>
            <input
              type="text"
              className="w-full h-14 px-8 outline-none bg-gray-200 rounded-3xl "
              placeholder={
                session.user?.name
                  ? `what is on your mind ${session.user?.name}`
                  : "what is on your mind"
              }
            ></input>
          </div>
          <hr className="w-full border-1 border-gray-300 mt-2" />
          <div className="flex justify-evenly w-full flex-1">
            <button className="flex items-center space-x-2 hover:bg-gray-300 p-2 rounded-full">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"
                className="w-[20px] h-[20px]"
              ></img>
              <p>Live video</p>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-300 p-2 rounded-full">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
                className="w-[20px] h-[20px]"
              ></img>
              <p>Photo/video</p>
            </button>
            <button className="flex items-center space-x-2 hover:bg-gray-300 p-2 rounded-full">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/eQV2iXPmmtj.png"
                className="w-[20px] h-[20px]"
              ></img>
              <p>Reel</p>
            </button>
          </div>
        </div>
      </div>
      <FeedPages
        profilePic="/espn.png"
        backgroundPic="/real.png"
        pageName="ESPN" time="44m" caption="Real Madrid is one of the most successful and well-known football clubs globally, based in Madrid, Spain."
      />
      <FeedPages
        profilePic="https://th.bing.com/th/id/OIP.6IBhxhzE_v434ChYUpiJTAHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        backgroundPic="/barcelona.png"
        pageName="FC Barcelona" time="1m" caption="FC Barcelona, commonly referred to as Barça, is a professional football club based in Barcelona, Catalonia, Spain"
      />
      <FeedPages
        profilePic="https://th.bing.com/th/id/OIP.T78piw4ZKi_LiyObrk3F2gHaEo?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        backgroundPic="/lewandowski.png"
        pageName="Lewandowski Fan page" time="3m" caption="Robert Lewandowski is a footballing powerhouse, widely acclaimed for his exceptional talent, dedication, and remarkable achievements on the field."
      />
      <FeedPages
        profilePic="https://th.bing.com/th/id/R.4aea3b224882cc6e2b8aa2d369f38405?rik=6r5pLr1lQGNJrQ&pid=ImgRaw&r=0"
        backgroundPic="/leverkusen.png"
        pageName="Leverkusen Fan Page" time="30m" caption="Bayer Leverkusen maintained their unbeaten run across all competitions this season after a stoppage time equaliser from Patrik Schick against Qarabag in the first leg of their Europa League last-16 tie."
      />
      <FeedPages
        profilePic="https://th.bing.com/th/id/R.c5f15c8b819f8a02a38e7f3f9882bde3?rik=TrWDQkY8QMK1eA&pid=ImgRaw&r=0"
        backgroundPic="/pep.png"
        pageName="Great Football coaches" time="23m" caption="Football coaches play a crucial role in shaping the success of a team."
      />
      <FeedPages
        profilePic="https://th.bing.com/th/id/OIP.0Dhrgsgm_fV3ky8Q7FijIQHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        backgroundPic='/barcelona.png'
        pageName="Leo Messi" time="54m" caption="Manchester City ace Erling Haaland has joked with Lionel Messi: 'it's time to retire'."
     />
      <FeedPages
        profilePic="https://th.bing.com/th/id/OIP.l1q6d5szKp3vjL3L96c1JgHaE_?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        backgroundPic="/jose_murinho.png"
        pageName="Jose Mourinho" time="47m" caption="Roma manager Jose Mourinho has been charged with improper conduct by the Italian Football Federation (FIGC) for his behavior during a Serie A match against Napoli."
     />

      <FeedPages
        profilePic="https://th.bing.com/th/id/OIP.bkcqGE3QXp_aUymeexQM-QHaJ7?w=128&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        backgroundPic="https://scontent.fpbh2-1.fna.fbcdn.net/v/t39.30808-6/428688891_953283366162440_366014632728444418_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k_EajqJeCHYAX8KUpZO&_nc_ht=scontent.fpbh2-1.fna&oh=00_AfAkudubS28NvwrOSzS2Ok_-IV7gcIZLGIN0gPdOvOZHqg&oe=65F4B8A1"
        pageName="Ronaldo" time="24m" caption="Cristiano Ronaldo, also known as Penaldo by some critics has been making headlines for his behavior during a recent match"
      />

      <FeedPages
        profilePic="https://th.bing.com/th/id/OIP.iNz-4148u46L16BwPxcBVwHaE7?rs=1&pid=ImgDetMain"
        backgroundPic="/mbappe1.png"
        pageName="ESPN" time="48m" caption="Kylian Mbappe has agreed to join Real Madrid this summer as a free agent, after his contract with Paris Saint-Germain (PSG) expires in June. "
      />
    </div>
  );
};

export default Feed;
