import react from "react";
import "./Settings.css";
import { Icon } from "@chakra-ui/react";
import { BellIcon, EmailIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import { RiSunLine } from "react-icons/ri";



const Settings = () => {
  return (
    <div className="all">
      <h1 className="settigns">Settings</h1>
      <p className="can">You can change your information here</p>
      <div className="changeInfo">
        <div className="left">
          <div><Icon as={FaUser} w={3.5} h={3.5} cursor="pointer" color="#090d1e" marginRight="10px" />Account</div>
          <div><Icon as={BellIcon}   w={4} h={4} cursor="pointer" color="#090d1e" marginRight="10px" /> Notification</div>
          <div><Icon as={RiSunLine} w={4} h={4} cursor="pointer" color="#090d1e" marginRight="10px" />Help</div>
          
        </div>
        <div className="right">
          <h2>General Info</h2>
          <div className="info">
            <div className="inform">
              <h4>FIRST NAME</h4>
              <input type="text" name="" id="" />
            </div>
            <div className="inform">
              <h4>LAST NAME</h4>
              <input type="text" name="" id="" />
            </div>
            <div className="inform">
              <h4>BIRTHDATE</h4>
              <input type="date" name="" id="" />
            </div>
            <div className="inform">
              <h4>SALARY</h4>
              <input type="text" name="" id="" />
            </div>
          </div>
        
        <button type="button" className="btn">Change</button>
        </div>
      </div>
    </div>
  );
};
export default Settings;
