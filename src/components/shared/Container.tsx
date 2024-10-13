import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn("max-w-[1440px] mx-auto h-full", className)}>{children}</div>;
};

export default Container;
