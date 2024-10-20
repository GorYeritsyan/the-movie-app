import { useGetAllMoviesQuery } from "@/api/api";
import Container from "@/components/shared/Container";
import FilmCard from "@/components/shared/FilmCard";
import FilmPagination from "@/components/shared/FilmPagination";
import SkeletonCard from "@/components/shared/SkeletonCard";
import { useAppSelector } from "@/hooks/hooks";
import { useEffect } from "react";

export let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = () => {
  const { page } = useAppSelector((state) => state.filmsReducer);
  const { data, isFetching } = useGetAllMoviesQuery(page);

  return (
      <Container>
        <div className="flex flex-col gap-y-6 pb-8 ">
          <div className="flex py-6 flex-wrap items-center justify-center gap-x-8 gap-y-8">
            {isFetching
              ? // <SkeletonCard />
                arr.map((el) => <SkeletonCard />)
              : data?.results.map((film) => (
                  <FilmCard key={film.id} film={film} />
                ))}
          </div>

          <FilmPagination />
        </div>
      </Container>
  );
};

export default Home;
