import { FilmCardProps } from "./FilmCard";

const FilmTitle = ({ film }: FilmCardProps) => {
  return (
    <div className="">
      <h3 className="hover:text-green-400 transition-colors duration-200 cursor-pointer text-lg font-semibold">
        {film.title.length <= 30 ? film.title : film.title.slice(0, 20) + "..."}
      </h3>
    </div>
  );
};

export default FilmTitle;
