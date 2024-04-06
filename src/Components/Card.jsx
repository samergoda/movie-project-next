import Image from "next/image";
import Link from "next/link";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

function Card({ res }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${res.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            res.backdrop_path || res.poster_path
          }`}
          alt=""
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-50 transition-opacity duration-300"
        ></Image>
        <div className="p-3">
          <h2 className="text-lg font-bold truncate ">
            {res.original_title || res.name}
          </h2>
          <p className="line-clamp-2 text-md">{res.overview}</p>
          <p className="flex items-center">{res.release_date || res.first_air_date}
          <BsFillHandThumbsUpFill className="h-5 mr-2 ml-3" />
          {res.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
