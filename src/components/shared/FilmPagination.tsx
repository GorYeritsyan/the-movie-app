import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { addPage, decreasePageByOne, increasePageByOne } from "@/store/slices/filmsSlice";
import { cn } from "@/lib/utils";

const paginationButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FilmPagination = () => {
  const { page } = useAppSelector((state) => state.filmsReducer);
  const dispatch = useAppDispatch();

  return (
    <Pagination>
      <PaginationContent className="flex gap-x-2">
        <PaginationItem>
          <PaginationPrevious onClick={() => dispatch(decreasePageByOne())} className="cursor-pointer text-md active:bg-slate-900" />
        </PaginationItem>
        {paginationButtons.map((button) => (
          <PaginationItem key={button}>
            <PaginationLink
              onClick={() => dispatch(addPage(button))}
              className={cn(
                " cursor-pointer p-5 active:bg-slate-900",
                button === page && "bg-green-500 hover:bg-green-600 active:bg-green-700"
              )}
            >
              {button}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => dispatch(increasePageByOne())} className="cursor-pointer text-md active:bg-slate-900" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

//next time improve paginatin logic and complete film card design

export default FilmPagination;
