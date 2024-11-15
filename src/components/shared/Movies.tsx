import SkeletonCard from "./SkeletonCard";
import FilmCard from "./FilmCard";

import { FilmsData } from "@/types/types";

type Movies = {
    data?: FilmsData;
    isFetching?: boolean
}

const Movies = ({data, isFetching}: Movies) => {
    const skeletons = [];

    for(let i = 0; i<8; i++){
        skeletons.push(i)
    }

  return (
    <div className="flex py-6 flex-wrap items-center justify-center gap-x-8 gap-y-8">
      {isFetching
        ? skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)
        : data?.results.map((film, i) => (
            <FilmCard key={film.id} film={film} index={i} />
          ))}
    </div>
  );
};

export default Movies;
