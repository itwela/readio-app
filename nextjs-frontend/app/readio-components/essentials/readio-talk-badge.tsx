"use client"

import cn from "clsx";
import { HTMLAttributes } from "react";
import { MdPlayCircle } from "react-icons/md";
import { toast } from "sonner";
import { ElevenLabsClient, play } from "elevenlabs";


// ElevenLabs --------------------------

const api_Key = "bc2697930732a0ba97be1d90cf641035"; // replace with your API key

// const elevenlabs = new ElevenLabsClient({
//   apiKey: api_Key // Defaults to process.env.ELEVENLABS_API_KEY
// });

// async function generateAudio() {
//   const audio = await elevenlabs.generate({
//     voice: "Rachel",
//     text: "Hello! 你好! Hola! नमस्ते! Bonjour! こんにちは! مرحبا! 안녕하세요! Ciao! Cześć! Привіт! வணக்கம்!",
//     model_id: "eleven_multilingual_v2"
//   });

//   await play(audio);
// }

// ElevenLabs END -----------------------

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ReadioTalkBadge = (props: ButtonProps) => {
  
  const { className, children, ...rest } = props;

  const testStuff = () => {

    toast.success("Test", {
      description: api_Key,
      id: "readioTestToast",
      // style: {
      //   backgroundColor: '#22c55e',
      // }
    })

    console.log(api_Key);
  }

  return (
    <>
    <div className="flex place-items-center gap-4">
        <button className="flex items-center justify-center text-red-500 w-max h-1/2 rounded-full">
            <MdPlayCircle className="w-6 h-6"/>
        </button>
         <button onClick={testStuff} className="w-max h-6 px-4 text-white bg-green-500 rounded-full">
          test
        </button>
    </div>
    </>

  );
};

export default ReadioTalkBadge

