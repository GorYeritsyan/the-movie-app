import { useGetAllMoviesQuery } from "@/api/api";
import Container from "@/components/shared/Container";
import FilmCard from "@/components/shared/FilmCard";
import FilmPagination from "@/components/shared/FilmPagination";
import SkeletonCard from "@/components/shared/SkeletonCard";
import { useEffect } from "react";

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

const Home = () => {
  const { data, isLoading } = useGetAllMoviesQuery();

  return (
    <main>
      <Container>
        <div className="flex py-6 flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {isLoading ? (
            // <SkeletonCard />
            arr.map(el => <SkeletonCard />)
          ) : (
            data?.results.map((film) => <FilmCard key={film.id} film={film} />)
          )}
        </div>

        <FilmPagination />
      </Container>
    </main>
  );
};

export default Home;
