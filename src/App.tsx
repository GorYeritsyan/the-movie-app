import { Route, Routes } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Home from "./pages/Home"
import GenrePage from "./pages/GenrePage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/genre/:genreId" element={<GenrePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App