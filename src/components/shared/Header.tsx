import { Link } from "react-router-dom";
import Container from "./Container";
import GenresNavigation from "./GenresNavigation";
import { useAppDispatch } from "@/hooks/hooks";
import { resetPage } from "@/store/slices/filmsSlice";
import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="z-50 h-16 dark bg-background/90 border-b-2 border-b-white/5  backdrop-blur-lg sticky top-0">
      <Container >
        <div className="flex space-x-10 items-center h-full">
          <h2 className="text-green-500 cursor-pointer  font-bold scroll-m-20 pb-2 text-4xl tracking-tight first:mt-0">
            <Link to="/" onClick={() => dispatch(resetPage())}>
              hulu
            </Link>
          </h2>
          <GenresNavigation />
          <div className="relative">
            <IoIosSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-lg" />
            <Input
              className="w-[600px] px-10 text-lg focus-visible:ring-none focus:ring-green-500 rounded-full bg-background"
              placeholder="Search for movies..."
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
