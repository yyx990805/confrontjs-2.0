import React from "react";
import Link from "next/link";
import data from "../../data/data.json";

export default function TouristAttractions() {
  return (
    <div className="flex flex-col items-center gap-10 py-20 lg:py-40">
      {data.Attractions.map((attraction, index) => {
        return (
          <div
            className={`flex flex-col-reverse ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-center gap-10 lg:gap-20`}
          >
            <div
              className={`flex flex-col items-center ${
                index % 2 !== 0
                  ? "lg:items-start lg:text-left"
                  : "lg:items-end lg:text-right"
              } text-center justify-between gap-10 py-4`}
            >
              <h2 className="font-bold text-xl lg:text-4xl">
                {attraction.title}
              </h2>
              <p className="w-[240px] lg:w-[420px]">{attraction.paragraph}</p>
              <Link
                href={attraction.url}
                className="px-6 py-4 bg-primary text-white text-sm lg:text-2xl rounded-2xl"
              >
                BUY A TICKET
              </Link>
            </div>
            <div className="lg:w-[520px] lg:h-[480px] w-[310px] h-[185px] rounded-3xl bg-tertiary"></div>
          </div>
        );
      })}
    </div>
  );
}