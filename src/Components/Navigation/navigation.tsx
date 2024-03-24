import React, { useEffect, useState } from "react";
import Avatar from "../../Picture/avatar.png";
import config from '../../config.json'
import axios from "axios";
import "./navigation.css";

interface UserData {
 firstname: string;
 lastname: string;
}

const Navigation = () => {
 const [data, setData] = useState<UserData | null>(null);
 const baseUrl = config.baseUrl;
 const clientId = config.clientId;

 useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/client/${clientId}`);
      setData(response.data);
    };
    fetchData();
 }, [baseUrl, clientId]);

 return (
    <nav className="navigation">
      <div className="navCont">
        <div className="Logo"></div>
        <div className="navItems">
          <a href="/">Dashboard</a>
          <a href="/account">Account</a>
          <a href="/transaction">Transactions</a>
        </div>
      </div>
      <div className="userDetails">
        {data && (
          <div className="userName">
            <p>{data.firstname} {data.lastname}</p>
            <p></p>
          </div>
        )}
        <div className="userImage">
          <img src={Avatar} alt="client image" />
        </div>
      </div>
    </nav>
 );
};

export default Navigation;
