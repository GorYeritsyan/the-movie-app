import { useGetGenresListQuery } from "@/api/api";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const GenresNavigation = () => {
  const { data } = useGetGenresListQuery();
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-slate-800">
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
              {data?.map((el) => (
                <NavigationMenuLink
                  key={el.id}
                  className="hover:bg-gray-500 rounded px-4 py-2 text-white cursor-pointer"
                >
                  {el.name}
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default GenresNavigation;
