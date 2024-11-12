import type { FilmInfo } from "@/types/types";
import FilmTitle from "./FilmTitle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export type FilmCardProps = {
  film: FilmInfo;
  index?: number
};

const variants = {
  hidden: {y: 20,  opacity: 0 },
  visible: {y: 0, opacity: 1 },
};

const FilmCard = ({ film, index }: FilmCardProps) => {
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: index as number * 0.05,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      className="p-2 ring-4 ring-offset-background ring-background hover:ring-green-500  rounded-xl flex flex-col gap-y-3"
    >
      <Link to={`/movie/${film.id}`}>
        <img
          className="  cursor-pointer rounded-xl hover:rounded-md transition-all duration-150"
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

// import * as React from "react";
// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// };

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1
//   }
// };

// export const Example = () => (
//   <motion.ul
//     className="container"
//     variants={container}
//     initial="hidden"
//     animate="visible"
//   >
//     {[0, 1, 2, 3].map((index) => (
//       <motion.li key={index} className="item" variants={item} />
//     ))}
//   </motion.ul>
// );
