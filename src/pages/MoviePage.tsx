import { useGetMovieTrailerQuery, useGetOneMovieQuery } from "@/api/api";
import Container from "@/components/shared/Container";
import MovieImage from "@/components/shared/MovieImage";
import MovieInfo from "@/components/shared/MovieInfo";

import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Loader from "@/components/shared/Loader";

const MoviePage = () => {
  const { movieId } = useParams();
  const { data, isFetching: isMovieFetching } = useGetOneMovieQuery(movieId);
  const {
    data: trailerData,
  } = useGetMovieTrailerQuery(movieId);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    trailerData?.forEach((elem) =>
      elem.name === "Official Trailer"
        ? iframeRef.current?.setAttribute(
            "src",
            `https://www.youtube.com/embed/${elem.key}`
          )
        : iframeRef.current?.setAttribute(
            "src",
            `https://www.youtube.com/embed/${elem.key}`
          )
    );
  }, [trailerData]);

  console.log(trailerData);

  return (
    <>
      <div>
        <Container className="max-w-screen-xl">
          {isMovieFetching ? (
            <div className='flex justify-center items-center mt-20'>
              <Loader />
            </div>
          ) : (
            <>
              {" "}
              <div className="flex py-6">
                <MovieImage movieData={data} />
                <MovieInfo movieData={data} />
              </div>
              <div className="flex flex-col space-y-4">
                <h1>Overview</h1>
                <p className="text-md w-[1000px]">{data?.overview}</p>
              </div>
              <div className="mt-8 pb-8">
                {/* //<iframe ref={iframeRef} ></iframe> */}

                <iframe
                  className="rounded-xl bg-slate-900  shadow-[0_0_6px_1px_rgba(255,255,255,0.5)]"
                  width={600}
                  height={300}
                  ref={iframeRef}
                  allowFullScreen
                ></iframe>
              </div>
            </>
          )}
        </Container>
      </div>
    </>
  );
};

export default MoviePage;
