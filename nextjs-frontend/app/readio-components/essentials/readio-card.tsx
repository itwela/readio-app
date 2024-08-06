import cn from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import ReadioTalkBadge from "./readio-talk-badge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  textcontent?: string;
}

const ReadioCard = (props: CardProps) => {
  const { className, children, textcontent, ...rest } = props;

  return (
    <>
      <div className={cn("w-full h-max my-4 flex flex-col place-self-center backdrop-blur-md bg-gray-300/10 hover:bg-gray-300/20 rounded-lg", className)} {...rest}>
        
        <div className={cn("w-full h-max p-4 flex gap-4 place-self-center rounded-t-lg", className)} {...rest}>
          {children}
        </div>
      
        <div className="w-full flex justify-between place-items-center p-4 h-max">
          <div className={cn("w-1/2 h-max p-[0.1rem] bg-red-500", className)} {...rest}/>
          <ReadioTalkBadge textcontent={textcontent} />
        </div>
      </div>
    </>
  );
};

export default ReadioCard