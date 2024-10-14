import type { FilmInfo } from "@/types/types";

type FilmCardProps = {
  film: FilmInfo;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <div className=" rounded-xl  flex flex-col gap-y-3">
      <img
        className="rounded-xl"
        src={import.meta.env.VITE_IMAGE_500_URL + film.poster_path}
        alt="films"
        width={300}
      />
      <h3 className="text-lg font-semibold">{film.title}</h3>
    </div>
  );
};

export default FilmCard;
