import React from "react";
import "./Transaction.css";
import Navigation from "../Components/navigation.tsx";
import { IoAdd } from "react-icons/io5";

const Transaction = () => {
  return (
    <div>
    <Navigation/>
    <div className="all">
    <div className="date">
      <select name="" id="" className="last">
        <option value="">The last 30 days</option>
      </select>
      <div className="sort">
        <p>Sort by</p>
        <select name="" id="" className="most">
            <option value="">Time(most recently)</option>
        </select>

      </div>
    </div>
    <div className="transaction">
        <div className="leftt">
        <h3 className="titles">Transactions</h3>
          <button>
            <IoAdd />
            Add
          </button>
          <input type="search" placeholder="Search" />
          <p>SORT </p>
          <select name="select">
            <option value="value1">No Sort registered</option>
          </select>
        </div>
        <div className="rightt">
       
    <input type="checkbox" id="scales" name="scales" />
    <label>Select all</label>


        </div>
    </div>
    </div>
    
    </div>
  );
};
export default Transaction;