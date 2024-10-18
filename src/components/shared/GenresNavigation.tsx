import { useGetGenresListQuery } from "@/api/api";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "@/hooks/hooks";
import { resetPage } from "@/store/slices/filmsSlice";

const GenresNavigation = () => {
  const { data } = useGetGenresListQuery();
  const dispatch = useAppDispatch();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark">Movies</NavigationMenuTrigger>
          <NavigationMenuContent className="dark bg-background">
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
              {data?.map((el) => (
                <NavLink
                  to={`/genre/${el.id}`}
                  key={el.id}
                  onClick={() => dispatch(resetPage())}
                  className={({ isActive }) =>
                    isActive
                      ? "hover:bg-green-600 bg-green-500  font-semibold rounded px-4 py-2 cursor-pointer"
                      : "hover:bg-slate-900 hover:text-green-500  font-semibold rounded px-4 py-2 text-white cursor-pointer"
                  }
                >
                  {el.name}
                </NavLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default GenresNavigation;
