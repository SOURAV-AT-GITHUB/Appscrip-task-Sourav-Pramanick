"use client";

import React, { useState } from "react";
import Filters from "../server/Filters";
import Products from "../server/Products";
import './productSection.css'

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
    <section id="product-section">
      <div id="product-section-top"  >
        <div id="product-section-top-left"  >
          <p>
            {productCount} ITEMS
          </p>

          <button
            onClick={handleToggleFilter}

          >
            {showFilter ? (
              <>
                <svg
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
                <span>HIDE FILTERS</span>{" "}
              </>
            ) : (
              <>
                <svg
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
                <span >SHOW FILTERS</span>{" "}
              </>
            )}
            <span id="filter-text">FILTER</span>
          </button>
        </div>

        <select
        >
          <option value="RECOMENDED">RECOMENDED</option>
          <option value="POPULARITY">POPULARITY</option>
          <option value="NEW ARRIVALS">NEW ARRIVALS</option>
          <option value="PRICE : LOW TO HIGH">PRICE : LOW TO HIGH</option>
          <option value="PRICE : HIGH TO LOW">PRICE : HIGH TO LOW</option>
        </select>
      </div>
      <div >
        {showFilter && <Filters isVisible={showFilter} />}
        <Products isVisible={showFilter} updateCount={updateCount} />
      </div>
    </section>
  );
}

export default ProductSection;
