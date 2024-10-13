import { useGetGenresListQuery } from "@/api/api";
import Container from "./Container";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Header = () => {
  const { data } = useGetGenresListQuery();
  console.log(data);

  return (
    <header className="h-16 bg-gray-400">
      <Container>
        <div className="flex justify-center space-x-10 items-center h-full">
          <h2>Logo</h2>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {data?.genres.map((el) => (
                      <li>{el.name}</li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </Container>
    </header>
  );
};

export default Header;
