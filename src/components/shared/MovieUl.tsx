import React from "react";
import MovieList from "./MovieList";
import { MovieProps } from "./MovieImage";

const MovieUl = ({ movieData }: MovieProps) => {
  let movieRuntime = movieData?.runtime;

  function getMovieRuntime() {
    let hour = Math.floor((movieRuntime as number) / 60);
    let minute = (movieRuntime as number) - hour * 60;
    return `${hour}h ${minute}m`;
  }

  return (
    <ul className="*:text-md mt-4 flex flex-col w-full">
      <MovieList title={"rating"}>
        TMDb {`${movieData?.vote_average} (${movieData?.vote_count})`}
      </MovieList>
      <MovieList title="genres">
        {movieData?.genres?.map((genre) => genre.name).join(", ")}
      </MovieList>
      <MovieList title="release date">{movieData?.release_date}</MovieList>
      <MovieList title="country">
        {movieData?.production_countries?.at(0)?.name}
      </MovieList>
      <MovieList title="collection">
        {movieData?.belongs_to_collection?.name}
      </MovieList>
      <MovieList title="duration">
        {movieRuntime} minutes / {getMovieRuntime()}
      </MovieList>
    </ul>
  );
};

export default MovieUl;
