import { useGetAllMoviesQuery } from "@/api/api";
import { useAppSelector } from "@/hooks/hooks";
import SkeletonCard from "./SkeletonCard";
import FilmCard from "./FilmCard";
import { arr } from "@/pages/Home";
import { FilmsData } from "@/types/types";

type Movies = {
    data?: FilmsData;
    isFetching?: boolean
}

const Movies = ({data, isFetching}: Movies) => {

  return (
    <div className="flex py-6 flex-wrap items-center justify-center gap-x-8 gap-y-8">
      {isFetching
        ? arr.map((el) => <SkeletonCard />)
        : data?.results.map((film, i) => (
            <FilmCard key={film.id} film={film} index={i} />
          ))}
    </div>
  );
};

export default Movies;
