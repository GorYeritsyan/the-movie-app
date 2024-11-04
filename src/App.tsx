import { Route, Routes } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Home from "./pages/Home"
import GenrePage from "./pages/GenrePage"
import MoviePage from "./pages/MoviePage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/genre/:genreId" element={<GenrePage />} />
          <Route path="/movie/:movieId" element={<MoviePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App