import { Box, Text } from "@chakra-ui/react";
import Lottie from 'react-lottie';
import animationData from "../../../../lotties/Animation - 1711789510532.json";

const ProfilDefault = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <Box p={5}>
            <Text  fontSize={"15.5px"} display={"flex"} flexDirection={"row"} justifyContent={"center"} color={"rgba(0, 0, 0, 0.439"} >
                You can choose which receiver will you send money
            </Text>
            <Box marginTop={"160px"}>
             <Lottie 
	    options={defaultOptions}
        height={300}
        width={300}/>
        </Box>
        </Box>
        
    )
}

export default ProfilDefault;