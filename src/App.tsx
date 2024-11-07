import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/shared/RootLayout";
import Home from "./pages/Home";
import GenrePage from "./pages/GenrePage";
import MoviePage from "./pages/MoviePage";
import Layout from "./components/shared/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/genre/:genreId" element={<GenrePage />} />
          </Route>
          <Route path="/movie/:movieId" element={<MoviePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
