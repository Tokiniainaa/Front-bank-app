import React from "react";
import Lottie from 'react-lottie';
import { Box } from "@chakra-ui/react";
import animationData from "../lotties/Animation - 1711786703527.json"

const NotFound = ()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100vh"}>
            <Lottie 
	    options={defaultOptions}
        height={500}
        width={800}
      />
        </Box>
        
    )
}

export default NotFound