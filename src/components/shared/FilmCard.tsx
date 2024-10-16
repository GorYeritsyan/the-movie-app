import type { FilmInfo } from "@/types/types";

type FilmCardProps = {
  film: FilmInfo;
};

const FilmCard = ({ film }: FilmCardProps) => {
  return (
    <div className="p-2 ring-4 ring-offset-background ring-background hover:ring-green-500  rounded-xl flex flex-col gap-y-3">
    
     <img
        className="  cursor-pointer rounded-xl hover:rounded-md transition-all duration-150"
        src={import.meta.env.VITE_IMAGE_500_URL + film.poster_path}
        alt="films"
        width={300}
      />
   
      <h3 className="hover:text-green-400 transition-colors duration-200 cursor-pointer text-lg font-semibold">{film.title}</h3>
    </div>
  );
};

export default FilmCard;
