import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination'

const paginationButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const FilmPagination = () => {
  return (
    <Pagination>
        <PaginationContent className='flex gap-x-2'>
            <PaginationItem>
                <PaginationPrevious className='cursor-pointer' />
            </PaginationItem>
            {paginationButtons.map(button => (
                <PaginationItem key={button}>
                    <PaginationLink className='cursor-pointer px-5 py-4'>{button}</PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem >
                <PaginationNext className='cursor-pointer' />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
  )
}

export default FilmPagination