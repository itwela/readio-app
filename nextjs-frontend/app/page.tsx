'use client'

import Image from "next/image";
import ReadioHeading from "./readio-components/essentials/readio-badge";
import ReadioCard from "./readio-components/essentials/readio-card";
import ReadioPlayer from "./readio-components/essentials/readio-player";
import { Toaster } from "sonner";


export default function Home() {
  return (
    <>
      <Toaster  />
      <ReadioPlayer/>
      <main className="">
      <div className="w-screen h-screen flex flex-col px-5 justify-start items-start">
        
        <div className="w-full h-[10%] place-self-start flex justify-start items-center">
        <ReadioHeading className="">
          <span className="text-red-500">R</span>
          eadio
        </ReadioHeading>
        </div>

        <ReadioCard>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.</p>
        </ReadioCard>

        <ReadioCard>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.</p>
        </ReadioCard>

        <ReadioCard>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.</p>
        </ReadioCard>

        <ReadioCard>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.</p>
        </ReadioCard>
        
      </div>
      </main>
     <Toaster/>
    </>
  );
}
