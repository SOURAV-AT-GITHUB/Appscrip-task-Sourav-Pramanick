import React from "react";
import './filter.css'
interface FiltersProps {
  isVisible: boolean;
}
const Filters: React.FC<FiltersProps> = ({ isVisible }) => {
  return (
    <div id="filters-section" >
      <br />
      <input type="checkbox" /> &nbsp;
      <label >CUSTOMIZBLE</label>
      <br />
      <br />
      <hr />
      <label >
        IDEAL FOR
      </label>
      <br />
      <select >
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Kids">Kids</option>
      </select>
      <br />
      <br />
      <hr />
      <label >
        OCCASION
      </label>
      <br />
      <select >
        <option value="All">All</option>
        <option value="Durga Puja">Durga Puja</option>
        <option value="Diwali">Diwali</option>
        <option value="New Year">New Year</option>
      </select>
      <br />
      <br />
      <hr />
      <label >
        WORK
      </label>
      <br />
      <select >
        <option value="All">All</option>
        <option value="Formal">Formal</option>
        <option value="Casual">Casual</option>
        <option value="Partyware">Partyware</option>
      </select>
      <br />
      <br />
      <hr />
      <label >
        FABRIC
      </label>
      <br />
      <select >
        <option value="All">All</option>
        <option value="Cotton">Cotton</option>
        <option value="Khadi">Khadi</option>
        <option value="Silk">Silk</option>
      </select>
      <br />
      <br />
      <hr />
      <label >
        SEGMENT
      </label>
      <br />
      <select >
        <option value="All">All</option>
        <option value="Cotton">Cotton</option>
        <option value="Khadi">Khadi</option>
        <option value="Silk">Silk</option>
      </select>
      <br />
      <br />
      <hr />
      <label >
        SUITABLE FOR
      </label>
      <br />
      <select >
        <option value="All">All</option>
        <option value="Adults">Adults</option>
        <option value="Kids">Kids</option>
        <option value="Infants">Infants</option>
      </select>
      <br />
      <br />
      <hr />
      <label >
        RAW MATERIALS
      </label>
      <br />
      <select >
        <option value="All">All</option>
        <option value="Cotton">Cotton</option>
        <option value="Khadi">Khadi</option>
        <option value="Silk">Silk</option>
      </select>
      <br />
      <br />
      <hr />
      <label >
        PATTERN
      </label>
      <br />
      <select >
        <option value="All">All</option>
        <option value="Printed">Printed</option>
        <option value="Check">Check</option>
        <option value="Plain">Plain</option>
      </select>
    </div>
  );
};

export default Filters;
