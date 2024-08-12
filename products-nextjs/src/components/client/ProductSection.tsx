"use client";

import React, { useState } from "react";
import Filters from "../server/Filters";
import Products from "../server/Products";

function ProductSection() {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [productCount, setProductCount] = useState<number>(0);

  const handleToggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const updateCount = (value: number) => {
    setProductCount(value);
  };

  return (
    <div className="  p-1 sm:p-4 lg:p-8 xl:p-12 2xl:p-16">
      <div className="w-full border-y-2 py-4  flex justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="font-bold hidden sm:block lg:block xl:block 2xl:block ">
            {productCount} ITEMS
          </p>

          <button
            onClick={handleToggleFilter}
            className="w-fit p-1 flex items-center  text-gray-500 font-serif"
          >
            {showFilter ? (
              <>
                <svg
                  className="hidden sm:block lg:block xl:block"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
                    stroke="#292D32"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                &nbsp; &nbsp;
                <span className="font-extrabold text-black sm:font-normal sm:text-gray-500  sm:underline    before:content-['FILTER'] sm:before:content-['HIDE\_FILTERS']"></span>{" "}
              </>
            ) : (
              <>
                <svg
                  className="hidden sm:block lg:block xl:block"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00027 2.72125L10.3469 7.06792C10.8603 7.58125 10.8603 8.42125 10.3469 8.93458L6.00027 13.2812"
                    stroke="#292D32"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp; &nbsp;
                <span className="font-extrabold text-black sm:font-normal sm:text-gray-500  sm:underline    before:content-['FILTER'] sm:before:content-['SHOW\_FILTERS']"></span>{" "}
              </>
            )}
          </button>
        </div>

        <select
          name=""
          id=""
          className="font-bold h-fit p-1 bg-white w-44 border-l-2 border-gray-500 sm:border-0 pl-6"
        >
          <option value="RECOMENDED">RECOMENDED</option>
          <option value="POPULARITY">POPULARITY</option>
          <option value="NEW ARRIVALS">NEW ARRIVALS</option>
          <option value="PRICE : LOW TO HIGH">PRICE : LOW TO HIGH</option>
          <option value="PRICE : HIGH TO LOW">PRICE : HIGH TO LOW</option>
        </select>
      </div>
      <div className="w-full block sm:block lg:flex xl:flex 2xl:flex">
        {showFilter && <Filters isVisible={showFilter} />}
        <Products isVisible={showFilter} updateCount={updateCount} />
      </div>
    </div>
  );
}

export default ProductSection;
