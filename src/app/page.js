'use client'
import Link from "next/link";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color={"#ffffff"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <div className="flex justify-center flex-col gap-4 items-center text-white h-fit mt-3 mb-5 px-5 md:px-0">
            <div className="font-bold flex gap-6 md:gap-5 justify-center items-center md:text-5xl text-4xl">
              Fund me with some amount<span><img src="icons/tea.gif" width="88" alt="" /></span>
            </div>
            <p className="text-center">A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>
            <div>
              <Link href={'/login'}>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here </button>
              </Link>

              <Link href={'/read-more'}>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
              </Link>
              <div className="flex flex-col justify-center items-center ">
                <Link href={'/profiles'}>
                  <button type="button" className="w-48 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Fund Raisers</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white h-1 opacity-10 "></div>

          <div className="text-white container mx-auto pb-32 pt-14 px-10">
            <h2 className="text-3xl font-bold text-center mb-14"> Your Fans can help you with Money</h2>
            <div className="flex gap-5 justify-around">
              <div className="item space-y-3 flex flex-col items-center justify-center">
                <img src="icons/man.gif" alt="" className="bg-slate-400 rounded-full p-1 text-black" width={88} />
                <p className="font-bold text-center">Fans want to help</p>
                <p className="text-center">Your Fans are available for you to help you</p>
              </div>
              <div className="item space-y-3 flex flex-col items-center justify-center">
                <img src="icons/coin.gif" alt="" className="bg-slate-400 rounded-full p-1 text-black" width={88} />
                <p className="font-bold text-center">Fans want to help</p>
                <p className="text-center">Your Fans are available for you to help you</p>
              </div>
              <div className="item space-y-3 flex flex-col items-center justify-center">
                <img src="icons/group.gif" alt="" className="bg-slate-400 rounded-full p-1 text-black" width={88} />
                <p className="font-bold text-center">Fans want to help</p>
                <p className="text-center">Your Fans are available for you to help you</p>
              </div>
            </div>
          </div>

          <div className="bg-white h-1 opacity-10 "></div>

          <div className="text-white container mx-auto pb-32 pt-14 flex flex-col justify-center items-center px-4">
            <h2 className="text-3xl font-bold text-center mb-14">About ThanksChat</h2>
            <div className="w-full max-w-5xl mt-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300">
      <div className="text-indigo-400 text-3xl mb-4">🚀</div>
      <h3 className="text-xl font-bold text-white mb-2">Real-Time Messaging</h3>
      <p className="text-gray-400 text-sm">
        Connect instantly with ultra-fast message delivery. Experience seamless communication without any lag or delays.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
      <div className="text-green-400 text-3xl mb-4">🔒</div>
      <h3 className="text-xl font-bold text-white mb-2">Secure & Private</h3>
      <p className="text-gray-400 text-sm">
        Your privacy is our priority. Built with modern security protocols to ensure your conversations remain confidential.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
      <div className="text-purple-400 text-3xl mb-4">✨</div>
      <h3 className="text-xl font-bold text-white mb-2">Intuitive UI</h3>
      <p className="text-gray-400 text-sm">
        A clean, clutter-free interface designed for the best user experience. Easy to navigate and pleasant to use.
      </p>
    </div>

  </div>
</div>
          </div>

        </>
      )}
    </>
  );
}