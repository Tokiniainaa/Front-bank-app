import React from "react";
import "./Account.css";
import Navigation from "../../Components/Navigation/navigation.tsx";
import axios from "axios";
import config from '../../config.json'

import { useEffect, useState } from "react";
import Formulaire from '../../Components/Form/Formulaire'

interface Account {
  id: string,
  balance: number
}

const Account = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [data, setData] = useState<[Account] | null>(null);
  const clientId = config.clientId
  const baseUrl = config.baseUrl;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/account/${clientId}`);
      setData(response.data);
    };
    fetchData();
 }, [baseUrl, clientId]);

 console.log(data);
 

  const handleButton = () => {
     setIsClicked(true);
  };
 
  const handleClose = () => {
     setIsClicked(false);
  };
  return (
    <div className="container">
      <Navigation />
      {isClicked && (
        <>
        <Formulaire />
        <span className="close" onClick={()=>handleClose()}>close</span>
        </>
      )}
      <div className="main">
        <div className="account">
          <h3>Account</h3>
          <button onClick={()=>handleButton()}>
            Add
          </button>
          <input type="search" placeholder="Search" />
          <p>Sort by</p>
          <select name="select">
            <option value="value1">Default</option>
          </select>
        </div>
        <div className="accountList">
          <div className="species">
              <div className="symbol">
                <div className="argent"></div>
                <div>Account n°:</div>
              </div>
              <div className="spc">Species</div>
            <div className="value">Balance</div>
          </div>
          <div className="allAccounts">
          {data?.map((elem)=>(
            <div className="accountCont">
              <div className="accountNumber">
                {elem.id}
              </div>
              <div className="accountBalance">
                {elem.balance} MGA
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
