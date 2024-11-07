import { FilmInfo } from "@/types/types";
import { Button } from "../ui/button";

export type MovieProps = {
  movieData?: FilmInfo;
};

const MovieImage = ({ movieData }: MovieProps) => {
  return (
    <div className="flex flex-col gap-y-2 h-full">
      <img
        className="rounded"
        src={import.meta.env.VITE_IMAGE_500_URL + movieData?.poster_path}
        alt="movie image"
        width={330}
      />
      <Button className="bg-slate-900 h-[40px] text-md hover:bg-slate-800 text-primary w-full">
        Watch Trailer
      </Button>
    </div>
  );
};

export default MovieImage;
