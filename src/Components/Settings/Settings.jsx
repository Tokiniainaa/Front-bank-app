
import { Icon,Box,Text,Flex,Input,Button } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import { RiSunLine } from "react-icons/ri";

const Settings = () => {
  return (
    <Box bg="rgb(244, 243, 243)" paddingLeft="5%"  paddingTop="2%" w="100%" h="100%">
      <Text fontSize={"x-large"} fontWeight="bolder" marginBottom="3px">Settings</Text>
      <Text fontSize={"smaller"} marginBottom={"30px"}  color={"rgba(0, 0, 0, 0.439)"} >You can change your information here</Text>
      <Flex flexDirection={"row"} w={"80%"}  h={"50%"} justifyContent={"space-between"}>
        <Box bg={"white"} w={"30%"} paddingTop={"3%"} paddingLeft={"2%"}>
          <Flex fontSize={"14px"} fontWeight={"700"} color={" rgba(0, 0, 0, 0.84)"} marginBottom={"10px"} flexDirection={"row"} alignItems={"center"} w={"40%"} ><Icon as={FaUser} w={3.5} h={3.5} cursor="pointer" color="#090d1e" marginRight="10px" />Account</Flex >
          <Flex fontSize={"14px"} fontWeight={"700"} color={" rgba(0, 0, 0, 0.84)"} marginBottom={"10px"} flexDirection={"row"} alignItems={"center"} w={"40%"}><Icon as={BellIcon}   w={4} h={4} cursor="pointer" color="#090d1e" marginRight="10px" /> Notification</Flex>
          <Flex fontSize={"14px"} fontWeight={"700"} color={" rgba(0, 0, 0, 0.84)"} marginBottom={"10px"} flexDirection={"row"} alignItems={"center"} w={"40%"}><Icon as={RiSunLine} w={4} h={4} cursor="pointer" color="#090d1e" marginRight="10px" />Help</Flex>
          
        </Box>
        <Box bg={"white"} w={"69.7%"} paddingTop={"2%"}  paddingLeft={"2%"}>
          <Text fontSize={"16px"} fontWeight={"700"} marginTop={"4px"} marginBottom={"20px"}> General Info</Text>
          <Box display={"grid"} gridTemplateColumns={"auto auto"}  gridTemplateRows={"auto auto"} gridGap={"10px"} w={"97%"}>
            <Box>
              <Text fontSize={"x-small"} fontWeight={"600"} marginBottom={"6px"} marginTop={"5px"} color={"rgba(0, 0, 0, 0.777)"}>FIRST NAME</Text >
              <Input w={"100%"} borderRadius={"2px"}  h={"70%"} outline={"none"} paddingLeft={"10px"} border={"2px solid rgba(0, 0, 0, 0.425)"}/>
            </Box>
            <Box>
              <Text fontSize={"x-small"} fontWeight={"600"} marginBottom={"6px"} marginTop={"5px"} color={"rgba(0, 0, 0, 0.777)"} >LAST NAME</Text >
              <Input w={"100%"} borderRadius={"2px"}  h={"70%"} outline={"none"} paddingLeft={"10px"} border={"2px solid rgba(0, 0, 0, 0.425)"}/>
            </Box>
            <Box>
              <Text fontSize={"x-small"} fontWeight={"600"} marginBottom={"6px"} marginTop={"5px"} color={"rgba(0, 0, 0, 0.777)"} >BIRTHDATE</Text >
              <Input type="date" w={"100%"} borderRadius={"2px"}  h={"70%"} outline={"none"} paddingLeft={"10px"} border={"2px solid rgba(0, 0, 0, 0.425)"} />
            </Box>
            <Box>
              <Text fontSize={"x-small"} fontWeight={"600"} marginBottom={"6px"} marginTop={"5px"} color={"rgba(0, 0, 0, 0.777)"} >SALARY</Text >
              <Input w={"100%"} borderRadius={"2px"}  h={"70%"} outline={"none"} paddingLeft={"10px"} border={"2px solid rgba(0, 0, 0, 0.425)"}/>
            </Box>
          </Box>
        
        <Button marginTop={"10%"} border={"1px solid black"} w={"20%"} h={"12%"} bg={"black"} color={"white"} borderRadius={"20px"} marginLeft={"2px"}>Change</Button>
        </Box>
      </Flex>
    </Box>
  );
};
export default Settings;
