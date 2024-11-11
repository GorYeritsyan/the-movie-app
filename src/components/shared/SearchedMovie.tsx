import { FilmInfo } from "@/types/types";

const SearchedMovie = ({ movie }: { movie: FilmInfo }) => {
  return (
    <li className="px-4 py-4 cursor-pointer hover:bg-slate-900">
      <div className="flex space-x-5 items-center">
        <img
          className="rounded-md"
          src={import.meta.env.VITE_IMAGE_500_URL + movie.poster_path}
          alt="searched movie"
          width={40}
        />
        <div className="flex flex-col">
          <span className="text-lg">{movie.title}</span>
          <span>{`${movie.vote_average.toFixed(1)} • ${movie.release_date
            .split("-")
            .at(0)}`}</span>
        </div>
      </div>
    </li>
  );
};

export default SearchedMovie;
