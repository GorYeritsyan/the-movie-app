import { GenreName, GenresList } from "@/types/types";
import { MovieProps } from "./MovieImage";
import MovieList from "./MovieList";
import MovieTitle from "./MovieTitle";
import MovieUl from "./MovieUl";

const MovieInfo = ({ movieData }: MovieProps) => {
  return (
    <div className="flex flex-col justify-between pb-[40px] px-10 w-full">
      <MovieTitle movieData={movieData} />
      <MovieUl movieData={movieData} />
    </div>
  );
};

export default MovieInfo;
