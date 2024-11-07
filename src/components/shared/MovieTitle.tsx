import { MovieProps } from "./MovieImage";

const MovieTitle = ({movieData}: MovieProps) => {
  let releaseYear = movieData?.release_date.split('-').at(0)
  return (
    <div className="space-y-1">
      <h1 className="">{`${movieData?.title} (${releaseYear})`} </h1>
    </div>
  );
};

export default MovieTitle;
