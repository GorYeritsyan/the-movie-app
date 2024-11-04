import type { FilmInfo } from "@/types/types";
import FilmTitle from "./FilmTitle";
import { Link } from "react-router-dom";

export type FilmCardProps = {
  film: FilmInfo;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <div className="p-2 ring-4 ring-offset-background ring-background hover:ring-green-500  rounded-xl flex flex-col gap-y-3">
      <Link to={`/movie/${film.id}`}>
        <img
          className="  cursor-pointer rounded-xl hover:rounded-md transition-all duration-150"
          src={import.meta.env.VITE_IMAGE_500_URL + film.poster_path}
          alt="films"
          width={300}
        />
      </Link>

      <FilmTitle film={film} />
    </div>
  );
};

export default FilmCard;
