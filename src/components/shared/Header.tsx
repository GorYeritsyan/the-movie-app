import Container from "./Container";
import GenresNavigation from "./GenresNavigation";

const Header = () => {
  return (
    <header className="h-16 dark bg-background/95  backdrop-blur-lg sticky top-0">
      <Container>
        <div className="flex  space-x-10 items-center h-full">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Logo
          </h2>
          <GenresNavigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
