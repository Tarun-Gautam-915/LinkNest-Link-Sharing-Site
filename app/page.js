import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
       <div className="flex flex-col justify-center ml-[10vw] gap-2">
        <p className="text-[#d2e823] text-bold text-7xl">Everything you</p>
        <p className="text-[#d2e823] text-bold text-7xl">are. In one,</p>
        <p className="text-[#d2e823] text-bold text-7xl">simple link in bio</p>
        <p className="text-[#d2e823] text-xl my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className="input flex gap-2">
          <input className="rounded-lg p-3 focus:outline-green-800 bg-white" type="text" placeholder="linkne.st/" />
          <button className="bg-[#e9c0e9] text-black rounded-full p-4 cursor-pointer active:scale-95 font-semibold">Claim your LinkNest</button>
        </div>
       </div>
       <div className="flex flex-col justify-center items-center mr-[10vw]">
        <img src="/h1.png" alt="homepage image" />
       </div>
      </section>

      <section className="bg-[#174ffa] min-h-[100vh]">
       
      </section>
    </main>
  );
}
