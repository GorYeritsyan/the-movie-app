import { Outlet } from "react-router-dom"
import Header from "./Header"
import FilmPagination from "./FilmPagination"

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <FilmPagination />
    </>
  )
}

export default Layout