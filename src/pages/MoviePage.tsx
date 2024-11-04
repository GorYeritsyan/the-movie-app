import { useGetOneMovieQuery } from "@/api/api";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { movieId } = useParams();
  const {data} = useGetOneMovieQuery(movieId)

  console.log(data);

  return <div>
    <div >
        <img  className="h-[400px] rounded " src={import.meta.env.VITE_IMAGE_500_URL + data?.poster_path} alt="movie background image" />
    </div>
    <div>
        <h2>{data?.title}</h2>

    </div>
  </div>;
};

export default MoviePage;
