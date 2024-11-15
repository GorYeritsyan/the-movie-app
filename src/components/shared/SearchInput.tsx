import {IoIosSearch} from "react-icons/io";
import {Input} from "@/components/ui/input.tsx";
import {motion} from "framer-motion";
import Loader from "@/components/shared/Loader.tsx";
import {Link} from "react-router-dom";
import SearchedMovie from "@/components/shared/SearchedMovie.tsx";
import {useState} from "react";
import {useSearchMoviesQuery} from "@/api/api.ts";

const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

const SearchInput = () => {
    const [inputValue, setInputValue] = useState("");
    const { data: searchedMovies, isFetching } = useSearchMoviesQuery(inputValue);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }
    return (
        <div className="relative">
            <IoIosSearch className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-3 text-lg"/>
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
                        {isFetching ?
                            <li className='flex justify-center m-3'><Loader/></li> : searchedMovies?.map((movie) => (
                                <Link
                                    onClick={() => setInputValue("")}
                                    to={`/movie/${movie.id}`}
                                    key={movie.id}
                                >
                                    <SearchedMovie movie={movie}/>
                                </Link>
                            ))}
                    </motion.ul>
                )}
        </div>
)
}

export default SearchInput