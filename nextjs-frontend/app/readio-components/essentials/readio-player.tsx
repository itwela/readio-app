import ReadioCard from "./readio-card";
import ReadioTalkBadge from "./readio-talk-badge";
import ReactAudioPlayer from 'react-audio-player';
import ReadioAudioController from "./readio-audio-controller";
import { HTMLAttributes } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

interface ReadioPlayerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  title?: string;
  textcontent?: string;
  audioSrc?: any;
}

const ReadioPlayer = (props: ReadioPlayerProps) => {
  return (
    <>
            <div className="fixed z-10 flex gap-4 place-items-center place-content-center justify-around px-10 w-screen h-[100px] rounded-t-xl text-black bottom-0  p-2 backdrop-blur-md bg-gray-400/10"  >
                
                <Drawer>
                  
                  <DrawerTrigger >
                      <span className="text-red-500">Readio Player</span>
                  </DrawerTrigger>

                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle className="text-red-500">Readio Title</DrawerTitle>
                      <DrawerDescription>Readio Subtitle</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter className="flex flex-col gap-2">
                        {props.textcontent}
                        <ReadioAudioController audioSrc=""/>
                      <DrawerClose>
                        <Button variant="outline" className="w-full">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>

                <div className="w-1/2">
                  <ReadioAudioController audioSrc=""/>
                </div>

                <ReadioTalkBadge/>

            </div>


    </>
  ) 
};

export default ReadioPlayer;

