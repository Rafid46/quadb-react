import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
const Cards = () => {
  //   const [data, setData] = useState(" ");
  //   const { medium, name } = data || {};
  const quadbData = useLoaderData();
  console.log(quadbData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {quadbData.map((data) => (
        <article
          key={data.show.id}
          className="flex bg-white transition hover:shadow-xl"
        >
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
              <span>{data?.show?.genres.join(" , ")}</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span className="flex items-center justify-center">
                <FaStar className="text-yellow-500" />
                <p className="mt-2">{data?.show?.rating?.average}</p>
              </span>
            </time>
          </div>

          <div className="">
            {data?.show?.image === null ? (
              <div className="w-[210px] h-[295px]">
                <p className="flex items-center justify-center text-gray-400 h-full text-sm mt-5">
                  No image available
                </p>
              </div>
            ) : (
              <img alt="Guitar" src={data?.show?.image?.medium} />
            )}
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                  {data?.show?.name}
                </h3>
              </a>

              <p className="flex items-center mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                <CiFlag1 className="mr-2 text-xl" />
                {data?.show?.network?.country?.name}
              </p>

              <p className="flex items-center mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                {data?.show?.network?.name}
              </p>
              <p className="flex items-center mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                <MdSchedule className="mr-2 text-xl" />
                {data?.show?.schedule?.time}
              </p>
            </div>
            <h3 className="font-medium text-sm uppercase ml-7 bg-[#6C22A6] w-fit p-2 py-1 rounded-sm text-gray-200">
              {data?.show?.status}
            </h3>
            <div className="sm:flex sm:items-end sm:justify-end">
              <Link to={`/summary/${data?.show?.id}`}>
                <button className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                  See details
                </button>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Cards;
