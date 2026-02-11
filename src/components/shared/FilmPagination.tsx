import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import {
  addPage,
  nextPortion,
  prevPortion,
} from "@/store/slices/filmsSlice";
import { cn } from "@/lib/utils";
import { memo, useMemo} from "react";
import { useGetAllMoviesQuery } from "@/api/api";

const FilmPagination = memo(() => {
  const { page, paginationPortionNumber } = useAppSelector(
    (state) => state.filmsReducer
  );
  const dispatch = useAppDispatch();
  const { data } = useGetAllMoviesQuery();

  const paginationButtons = useMemo(() => {
    const array: number[] = [];
    for (let i = 1; i <= data?.total_pages; i++) {
      console.log("loop");
      array.push(i);
    }

    return array;
  }, [data?.total_pages]);

  // pagination logic

  const portionSize = 10;
  const leftPortionPageNumber = (paginationPortionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = paginationPortionNumber * portionSize;

  function handleClick(button: number) {
    dispatch(addPage(button));
    scrollTo(0, 0);
  }

  return (
    <Pagination>
      <PaginationContent className="flex gap-x-2">
        {paginationPortionNumber > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => dispatch(prevPortion())}
              className="cursor-pointer text-md active:bg-slate-900"
            />
          </PaginationItem>
        )}
        {paginationButtons
          .filter(
            (button) =>
              button >= leftPortionPageNumber &&
              button <= rightPortionPageNumber
          )
          .map((button) => (
            <PaginationItem key={button}>
              <PaginationLink
                onClick={() => handleClick(button)}
                className={cn(
                  " cursor-pointer p-5 active:bg-slate-900",
                  button === page &&
                    "bg-green-500 hover:bg-green-600 active:bg-green-700"
                )}
              >
                {button}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => dispatch(nextPortion())}
            className="cursor-pointer text-md active:bg-slate-900"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
});

//next time improve paginatin logic and complete film card design

export default FilmPagination;
