import { Suspense } from "react";
import MovieInfo from "./_components/movie-info";
import MovieVideos from "./_components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
