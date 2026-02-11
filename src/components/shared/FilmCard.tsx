import type { FilmInfo } from "@/types/types";
import FilmTitle from "./FilmTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export type FilmCardProps = {
  film: FilmInfo;
  index?: number;
};

const variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const FilmCard = ({ film, index }: FilmCardProps) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: (index as number) * 0.1,
        ease: "easeInOut",
        duration: 0.6,
      }}
      className="p-2 ring-4 ring-offset-background ring-background hover:ring-green-500  rounded-xl flex flex-col gap-y-3"
    >
      <Link to={`/movie/${film.id}`}>
        <img
          className="cursor-pointer rounded-xl hover:rounded-md transition-all duration-150"
          src={import.meta.env.VITE_IMAGE_500_URL + film.poster_path}
          alt="films"
          width={300}
        />
      </Link>

      <FilmTitle film={film} />
    </motion.div>
  );
};

export default FilmCard;
