import { useGetOneMovieQuery } from "@/api/api";
import Container from "@/components/shared/Container";
import MovieImage from "@/components/shared/MovieImage";
import MovieInfo from "@/components/shared/MovieInfo";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { movieId } = useParams();
  const { data } = useGetOneMovieQuery(movieId);

  console.log(data);

  return (
    <>
        <div>
          <Container>
            <div className="flex py-6">
            <MovieImage movieData={data} /> 
            <MovieInfo movieData={data} />
            </div>
          </Container>
        </div>
    </>
  );
};

export default MoviePage;
