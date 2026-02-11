import FilmPagination from "./FilmPagination";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="pb-8">
      <Outlet />
      <FilmPagination />
    </main>
  );
};

export default Layout;
