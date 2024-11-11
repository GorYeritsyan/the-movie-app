import { useGetGenreMoviesQuery } from "@/api/api";
import FilmCard from "@/components/shared/FilmCard";
import SkeletonCard from "@/components/shared/SkeletonCard";
import { useAppSelector } from "@/hooks/hooks";
import { useParams } from "react-router-dom";
import { arr } from "./Home";
import FilmPagination from "@/components/shared/FilmPagination";
import Container from "@/components/shared/Container";
import Movies from "@/components/shared/Movies";

const GenrePage = () => {
  const { genreId } = useParams();
  const { page } = useAppSelector((state) => state.filmsReducer);

  const { data, isFetching } = useGetGenreMoviesQuery({ page, genreId });
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-y-6">
          <h2 className="text-4xl ml-16">Discover</h2>
          <Movies data={data} isFetching={isFetching} />
        </div>
      </Container>
    </section>
  );
};

export default GenrePage;
