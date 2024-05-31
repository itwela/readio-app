import cn from "clsx";
import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6; // Define heading levels
}

const ReadioHeading = (props: HeadingProps) => {
  const { className, children, ...rest } = props;

  return (
    <div className={cn("flex items-center text-3xl font-bold", className)} {...rest}>
        {children}
    </div>
  );
};

export default ReadioHeading;