import { Link } from "react-router-dom";
import Container from "./Container";
import GenresNavigation from "./GenresNavigation";
import { useAppDispatch } from "@/hooks/hooks";
import { resetPage } from "@/store/slices/filmsSlice";
import SearchInput from "@/components/shared/SearchInput.tsx";



const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="z-50 h-16 dark bg-background/90 border-b-2 border-b-white/5  backdrop-blur-lg sticky top-0">
      <Container>
        <div className="flex space-x-10 items-center h-full">
          <h2 className="text-green-500 cursor-pointer font-bold scroll-m-20 pb-2 text-4xl tracking-tight first:mt-0">
            <Link to="/" onClick={() => dispatch(resetPage())}>
              hulu
            </Link>
          </h2>
          <GenresNavigation />
          <SearchInput />
        </div>
      </Container>
    </header>
  );
};

export default Header;
