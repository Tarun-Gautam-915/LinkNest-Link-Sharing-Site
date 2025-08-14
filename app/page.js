import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
       <div className="flex flex-col justify-center items-center ml-[10vw] gap-4">
        <p className="text-[#d2e823] text-bold text-5xl">Everything you are. In one, simple link in bio</p>
        <p className="text-[#d2e823] text-xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
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
