import { useGetAllMoviesQuery } from "@/api/api"
import Container from "@/components/shared/Container"

const imageUrl = 'https://image.tmdb.org/t/p/w500'

const Home = () => {
  const {data} = useGetAllMoviesQuery()
  return (
    <main>
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-4 py-4">
        {data?.results.map(film => (
          <div className="w-[300px]">
            <img src={imageUrl + film.poster_path} alt="films" />
            <h3>{film.title}</h3>
          </div>
        ))}
        </div>
      </Container>
    </main>
  )
}

export default Home