import { Link } from "react-router-dom";
import { FilmCardProps } from "./FilmCard";

const FilmTitle = ({ film }: FilmCardProps) => {
  return (
    <h3 className="hover:text-green-400 transition-colors duration-200 cursor-pointer text-lg font-semibold">
      <Link to={`/movie/${film.id}`}>
        {film.title.length <= 30 ? film.title : film.title.slice(0, 20) + "..."}
      </Link>
    </h3>
  );
};

export default FilmTitle;
