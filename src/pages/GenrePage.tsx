import {useGetGenreMoviesQuery, useGetGenresListQuery} from "@/api/api";
import { useAppSelector } from "@/hooks/hooks";
import { useParams } from "react-router-dom";
import Container from "@/components/shared/Container";
import Movies from "@/components/shared/Movies";

const GenrePage = () => {
  const { genreId } = useParams();
  const { data: genres } = useGetGenresListQuery();
  const { page } = useAppSelector((state) => state.filmsReducer);

  const { data, isFetching } = useGetGenreMoviesQuery({ page, genreId });
  return (
    <section>
      <Container>
        <div className="flex flex-col py-4">
          <h2 className="text-4xl ml-16">{genres?.filter(el => el?.id === +genreId).map(el => <span key={el.id}>{el.name}</span>)}</h2>
          <Movies data={data} isFetching={isFetching} />
        </div>
      </Container>
    </section>
  );
};

export default GenrePage;
