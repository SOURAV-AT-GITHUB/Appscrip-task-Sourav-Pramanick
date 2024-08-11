"use client";

import React, { useState } from 'react';
import Filters from '../server/Filters';
import Products from '../server/Products';

function ProductSection() {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [productCount,setProductCount] =useState<number>(0)


  const handleToggleFilter = () => {
    setShowFilter(prev => !prev);
  };
  
  const updateCount = (value: number) => {
    setProductCount(value);
  };

  return (
    <div className=' p-4 sm:p-4 lg:p-8 xl:p-12 2xl:p-16'>
      <div className='w-full border-b-2  flex justify-between items-center'>
      <div className='flex items-center'>
      <p className="font-bold hidden sm:block lg:block xl:block 2xl:block ">{productCount} ITEMS</p>
        <button 
          onClick={handleToggleFilter} 
          className='w-fit p-1'
        >
          {showFilter ? '< Hide Filters' : '> Show Filters'}
        </button>

      </div>
      <select name="" id="" className='font-bold h-fit p-1'>
    <option value="RECOMENDED">RECOMENDED</option>
    <option value="POPULARITY">POPULARITY</option>
    <option value="NEW ARRIVALS">NEW ARRIVALS</option>
    <option value="PRICE : LOW TO HIGH">PRICE : LOW TO HIGH</option>
    <option value="PRICE : HIGH TO LOW">PRICE : HIGH TO LOW</option>
      </select>
      </div>
      <div className='w-full block sm:block lg:flex xl:flex 2xl:flex'>
        {showFilter && <Filters isVisible={showFilter}/>}
        <Products isVisible={showFilter} updateCount={updateCount}  />
      </div>
    </div>
  );
}

export default ProductSection;
