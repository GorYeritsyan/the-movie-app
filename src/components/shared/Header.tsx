import { Link } from "react-router-dom";
import Container from "./Container";
import GenresNavigation from "./GenresNavigation";
import { useAppDispatch } from "@/hooks/hooks";
import { resetPage } from "@/store/slices/filmsSlice";
import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { useSearchMoviesQuery } from "@/api/api";
import SearchedMovie from "./SearchedMovie";
import { motion } from "framer-motion";
import Loader from "@/components/shared/Loader.tsx";

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const { data: searchedMovies, isFetching } = useSearchMoviesQuery(inputValue);

  console.log(searchedMovies);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <header className="z-50 h-16 dark bg-background/90 border-b-2 border-b-white/5  backdrop-blur-lg sticky top-0">
      <Container>
        <div className="flex space-x-10 items-center h-full">
          <h2 className="text-green-500 cursor-pointer  font-bold scroll-m-20 pb-2 text-4xl tracking-tight first:mt-0">
            <Link to="/" onClick={() => dispatch(resetPage())}>
              hulu
            </Link>
          </h2>
          <GenresNavigation />
          <div className="relative">
            <IoIosSearch className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-3 text-lg" />
            <Input
              value={inputValue}
              onChange={handleInputChange}
              className="w-[400px] px-10 text-lg focus-visible:ring-none focus:ring-green-500 rounded-full bg-background"
              placeholder="Search for movies..."
            />


            {typeof searchedMovies?.length !== "undefined" &&
              searchedMovies?.length > 1 && (
                <motion.ul
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.2,
                    ease: "easeIn"
                  }}
                  className="absolute top-10 bg-background rounded-md max-h-[600px] overflow-y-scroll border border-white/10 w-full"
                >
                  {isFetching ? <li className='flex justify-center m-3'><Loader /></li> : searchedMovies?.map((movie) => (
                      <Link
                          onClick={() => setInputValue("")}
                          to={`/movie/${movie.id}`}
                          key={movie.id}
                      >
                        <SearchedMovie movie={movie} />
                      </Link>
                  ))}
                </motion.ul>
              )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
