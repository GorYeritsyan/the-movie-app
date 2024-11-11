import { useGetAllMoviesQuery } from "@/api/api";
import Container from "@/components/shared/Container";
import FilmCard from "@/components/shared/FilmCard";
import FilmPagination from "@/components/shared/FilmPagination";
import Movies from "@/components/shared/Movies";
import SkeletonCard from "@/components/shared/SkeletonCard";
import { useAppSelector } from "@/hooks/hooks";
import { motion } from "framer-motion";

export let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = () => {
  const { page } = useAppSelector((state) => state.filmsReducer);
  const { data, isFetching } = useGetAllMoviesQuery(page);

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-y-6">
          <Movies data={data} isFetching={isFetching} />
        </div>
      </Container>
    </section>
  );
};

export default Home;
