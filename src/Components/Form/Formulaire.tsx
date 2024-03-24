import { useEffect, useState } from "react";
import config from '../../config.json'
import axios from "axios";
import "./Formulaire.css";

interface Bank {
  id: number,
  name: string
}

const Formulaire = () => {
  const [data, setData] = useState<[Bank] | null>(null)
  const baseUrl = config.baseUrl;
  const idClient = config.clientId;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/bank/all`);
      setData(response.data);
    };
    fetchData();
 }, [baseUrl]);

 console.log(data);
 

  return (
    <div className="containers">
      <form action="#">
        <h1>Create an account</h1>
        <div className="details">
          <div className="input-box2">
            <p>First balance</p>
            <input type="text" placeholder="Balance" required></input>
          </div>
        </div>
        <div>
          <p className="choose">Choose your bank</p>
          <div className="bankList">
            {data?.map((elem)=>(
              <div className="bankName">
                {elem.name}
              </div>
            ))}
          </div>
        </div>
        <div className="button">
          <input type="submit" className="addAccount" value=" + Add Account" />
        </div>
      </form>
    </div>
  );
};
export default Formulaire;
