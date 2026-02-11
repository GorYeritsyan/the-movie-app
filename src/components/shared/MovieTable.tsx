import { MovieProps } from "./MovieImage";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../ui/table";

interface ITableItems {
  name: string;
  info?: string;
}

const MovieTable = ({ movieData }: MovieProps) => {
  const movieRuntime = movieData?.runtime;

  const tableItems: ITableItems[] = [
    {
      name: "Rating:",
      info: `TMDb ${movieData?.vote_average} (${movieData?.vote_count})`,
    },

    {
      name: "Genres:",
      info: movieData?.genres?.map((genre) => genre.name).join(", "),
    },

    {
      name: "Release date:",
      info: movieData?.release_date,
    },

    {
      name: "Country:",
      info: movieData?.production_countries?.at(0)?.name,
    },

    {
      name: "Collection:",
      info: movieData?.belongs_to_collection?.name,
    },

    {
      name: "Duration:",
      info: `${movieRuntime} minutes / ${getMovieRuntime()}`,
    },
  ];

  function getMovieRuntime() {
    const hour = Math.floor((movieRuntime as number) / 60);
    const minute = (movieRuntime as number) - hour * 60;
    if (hour > 0) {
      return `${hour}h ${minute}m`;
    } else {
      return "";
    }
  }

  return (
    <Table className="w-full">
      <TableBody className="*:text-lg">
        {tableItems.map((item) => (
          <TableRow key={item.name}>
            <TableCell className="font-medium  w-[200px]">
              {item.name}
            </TableCell>
            <TableCell className="text-base">{item.info}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MovieTable;
