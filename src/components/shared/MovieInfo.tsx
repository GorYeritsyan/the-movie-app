import { MovieProps } from "./MovieImage";
import MovieTitle from "./MovieTitle";
import MovieTable from "./MovieTable";

const MovieInfo = ({ movieData }: MovieProps) => {
  return (
    <div className="flex flex-col justify-between  px-10 w-full">
      <MovieTitle movieData={movieData} />
      <MovieTable movieData={movieData} />
    </div>
  );
};

export default MovieInfo;
