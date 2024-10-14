import { useAppDispatch } from "@/hooks/hooks";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { addPage } from "@/store/slices/filmsSlice";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const paginationButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FilmPagination = () => {
  const dispatch = useAppDispatch();
  const [bool, setBool] = useState(false);

  function handleClick(button: number) {
    dispatch(addPage(button));
    setBool(true);
  }

  return (
    <Pagination>
      <PaginationContent className="flex gap-x-2">
        <PaginationItem>
          <PaginationPrevious className="cursor-pointer" />
        </PaginationItem>
        {paginationButtons.map((button) => (
          <PaginationItem key={button}>
            <PaginationLink
              onClick={() => handleClick(button)}
              className={"cursor-pointer px-5 py-4"}
            >
              {button}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext className="cursor-pointer" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

//next time improve paginatin logic and complete film card design

export default FilmPagination;
