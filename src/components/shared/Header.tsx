import { useGetGenresListQuery } from "@/api/api";
import Container from "./Container";

const Header = () => {
  const {data} = useGetGenresListQuery()
  console.log(data);
  
  return (
    <header className="h-16 bg-gray-400">
      <Container className="flex items-center">
        <h2>Logo</h2>
      </Container>
    </header>
  );
};

export default Header;
