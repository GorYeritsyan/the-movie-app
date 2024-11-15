import { useGetAllMoviesQuery } from "@/api/api";
import Container from "@/components/shared/Container";
import Movies from "@/components/shared/Movies";
import { useAppSelector } from "@/hooks/hooks";



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
