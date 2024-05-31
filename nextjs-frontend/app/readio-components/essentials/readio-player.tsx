'use client'

import ReadioCard from "./readio-card";
import ReadioTalkBadge from "./readio-talk-badge";

const ReadioPlayer = () => {
  return (
    <>
            <div className="fixed z-10 flex flex-col gap-4 place-items-center justify-center w-1/2 h-1/4 rounded-t-xl text-black bottom-0 left-1/4 right-0 p-2 backdrop-blur-md bg-gray-400/10">
                <span>Readio Player</span>
                <ReadioTalkBadge/>
            </div>
    </>
  ) 
};

export default ReadioPlayer;

