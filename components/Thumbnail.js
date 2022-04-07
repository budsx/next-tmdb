import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Thumbnail({ result }) {
  const BASE_URL = `https://image.tmdb.org/t/p/original/`;
  return (
    <div
      className="p-4 group cursor-pointer transition duration-200 ease-in 
      transform sm:hover:scale-105"
    >
      <Image
        layout="responsive"
        width={1920}
        height={1080}
        src={`${BASE_URL}${result.backdrop_path}`}
        alt={result.title}
      />
      <div className="p-3">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.release_date || result.first_air_date}
          <ThumbUpIcon className="h-5 mx-3" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
export default Thumbnail;
