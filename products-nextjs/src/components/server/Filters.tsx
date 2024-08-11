import React from "react";

interface FiltersProps {
  isVisible: boolean;
}
const Filters: React.FC<FiltersProps> = ({ isVisible }) => {
  return (
    <div className="w-full sm:w-full lg:w-1/6 xl:w-1/6 2xl:w-1/6">
      <br />
      <input type="checkbox" /> &nbsp;
      <label className="font-bold">CUSTOMIZBLE</label>
      <br />
      <br />
      <hr />
      <label htmlFor="" className="font-bold">
        IDEAL FOR
      </label>
      <br />
      <select className="w-full">
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Kids">Kids</option>
      </select>
      <br />
      <br />
      <hr />
      <label htmlFor="" className="font-bold">
        OCCASION
      </label>
      <br />
      <select className="w-full">
        <option value="All">All</option>
        <option value="Durga Puja">Durga Puja</option>
        <option value="Diwali">Diwali</option>
        <option value="New Year">New Year</option>
      </select>
      <br />
      <br />
      <hr />
      <label htmlFor="" className="font-bold">
        WORK
      </label>
      <br />
      <select className="w-full">
        <option value="All">All</option>
        <option value="Formal">Formal</option>
        <option value="Casual">Casual</option>
        <option value="Partyware">Partyware</option>
      </select>
      <br />
      <br />
      <hr />
      <label htmlFor="" className="font-bold">
        FABRIC
      </label>
      <br />
      <select className="w-full">
        <option value="All">All</option>
        <option value="Cotton">Cotton</option>
        <option value="Khadi">Khadi</option>
        <option value="Silk">Silk</option>
      </select>
      <br />
      <br />
      <hr />
      <label htmlFor="" className="font-bold">
        SEGMENT
      </label>
      <br />
      <select className="w-full">
        <option value="All">All</option>
        <option value="Cotton">Cotton</option>
        <option value="Khadi">Khadi</option>
        <option value="Silk">Silk</option>
      </select>
      <br />
      <br />
      <hr />
      <label htmlFor="" className="font-bold">
        SUITABLE FOR
      </label>
      <br />
      <select className="w-full">
        <option value="All">All</option>
        <option value="Adults">Adults</option>
        <option value="Kids">Kids</option>
        <option value="Infants">Infants</option>
      </select>
      <br />
      <br />
      <hr />
      <label htmlFor="" className="font-bold">
        RAW MATERIALS
      </label>
      <br />
      <select className="w-full">
        <option value="All">All</option>
        <option value="Cotton">Cotton</option>
        <option value="Khadi">Khadi</option>
        <option value="Silk">Silk</option>
      </select>
      <br />
      <br />
      <hr />
      <label htmlFor="" className="font-bold">
        PATTERN
      </label>
      <br />
      <select className="w-full">
        <option value="All">All</option>
        <option value="Printed">Printed</option>
        <option value="Check">Check</option>
        <option value="Plain">Plain</option>
      </select>
    </div>
  );
};

export default Filters;
