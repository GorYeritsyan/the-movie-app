import { useGetGenreMoviesQuery } from "@/api/api";
import FilmCard from "@/components/shared/FilmCard";
import SkeletonCard from "@/components/shared/SkeletonCard";
import { useAppSelector } from "@/hooks/hooks";
import { useParams } from "react-router-dom";
import { arr } from "./Home";
import FilmPagination from "@/components/shared/FilmPagination";
import Container from "@/components/shared/Container";

const GenrePage = () => {
  const { genreId } = useParams();
  const { page } = useAppSelector((state) => state.filmsReducer);

  const { data, isFetching } = useGetGenreMoviesQuery({ page, genreId });
  return (
    <Container>
      <div className="flex flex-col gap-y-6 pb-8">
        <h2 className="text-4xl ml-16">Discover</h2>
        <div className="flex py-6 flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {isFetching
            ? // <SkeletonCard />
              arr.map((el) => <SkeletonCard/>)
            : data?.results.map((film) => (
                <FilmCard key={film.id} film={film} />
              ))}
        </div>

        <FilmPagination />
      </div>
    </Container>
  );
};

export default GenrePage;
