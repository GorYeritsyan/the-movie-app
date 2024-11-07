import { ReactNode } from "react";

const MovieList = ({children, title}: {children: ReactNode, title: string}) => {
  return (
    <>
      <li>
        <span className="font-semibold text-[17px] mr-3 ">{title.at(0)?.toUpperCase() + title.slice(1,)}:</span> {children}
      </li>
      <hr className="my-2" />
    </>
  );
};

export default MovieList;
