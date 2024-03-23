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
          <select name="select" className="SELECT">
            <option value="value1">No Sort registered</option>
          </select>
          <div className="types">
           <select name="" className="SELECT2">
            <option value="">ACCOUNT</option>
            <option value="">ALL ACCOUNTS</option>
            <option value="">SPECIES</option>
           </select>
           <select name="" className="SELECT2" >
            <option value="">CATEGORY</option>
            <option value="">ALL CATEGORIES</option>
            <option value="">Food and Drinks</option>
            <option value="">Online shopping and Store</option>
            <option value="">Pets</option>
            <option value="">Gift</option>
           </select>
           <select name="" className="SELECT2"><option value="">LABEL</option></select>
           <select name="" className="SELECT2">
            <option value="">CURRENCIES</option>
            <option value="">All Currencies</option>
            <option value="">MGA</option>
           </select>
           <select name="" className="SELECT2">
            <option value="">TRANSACTION TYPE</option>
            <option value="">All type of transaction</option>
            <option value="">Recipe</option>
            <option value="">Spending</option>
            <option value="">Payment</option>
           </select>
           <select name="" className="SELECT2">
            <option value="">PAYEMENT TYPE</option>
            <option value="">All types of payment</option>
            <option value="">Species</option>
            <option value="">Debit card</option>
            <option value="">Credit card</option>
            <option value="">Transfer</option>
            <option value="">Gift certificate</option>
            <option value="">Mobile payement</option>
            <option value="">Web payement</option>
           </select>
           <select name=""className="SELECT2" >
            <option value="">REGISTRATION STATUS</option>
            <option value="">All registration status</option>
            <option value="">Bank reconciliation done</option>
            <option value="">Deleted</option>
            <option value="">Invalid</option>
           </select>
          </div>
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