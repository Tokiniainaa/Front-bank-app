import React, {useState, useEffect} from 'react';
import { Box, Image, Text, Flex, Icon, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, VStack } from "@chakra-ui/react";
import Avatar from "../../../pictures/avatar.png";
import { BellIcon, EmailIcon } from "@chakra-ui/icons";
import ProfileInfo from './ProfilInfo/ProfilInfo';
import { FaBirthdayCake, FaUser, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa';
import axios from "axios"
import data from "../../../clientInfo.json"

const Profil = () => {
    const [clientData, setClientData] = useState();
    const [birthdates, setBirthdates] = useState()
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const clientId = data.id_client;

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get(`${baseUrl}/client/${clientId}`);
            if (response){
                setClientData(response.data)
            }
        }
        fetchData()
    }, [baseUrl, clientId])


    useEffect(()=>{
        if(clientData){
            const date = new Date(clientData.birthdate);
            const formattedDate = date.toISOString().split('T')[0];
            setBirthdates(formattedDate)
        }
    }, [setBirthdates, clientData])

    return (
        <Box w="31%" h="100%" p={4}>
            <Flex direction="row" justifyContent="flex-end" gap={5}>
                <Popover>
                    <PopoverTrigger>
                        <Icon as={EmailIcon} w={4} h={4} cursor="pointer" color="#090d1e" />
                    </PopoverTrigger>
                    <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2} >
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Email</PopoverHeader>
                        <PopoverBody>
                            <Text>No message yet</Text>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Icon as={BellIcon} w={4} h={4} cursor="pointer" color="#090d1e" />
                    </PopoverTrigger>
                    <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2}> 
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Notifications</PopoverHeader>
                        <PopoverBody>
                            <Text>There's no notification yet.</Text>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
            <Box marginTop="16vh">
                <Image 
                    src={Avatar}
                    alt="client image"
                    borderRadius="full"
                    boxSize="100px"
                    mx="auto"
                ></Image>
                <VStack marginLeft={4} spacing={4} align={"stretch"} marginTop={12}>
                    {clientData ? (
                        <>
                        <ProfileInfo title="Name" value={clientData.firstname + " " + clientData.lastname} IconComponent={FaUser}/>
                        <ProfileInfo title="Birthdate" value={birthdates} IconComponent={FaBirthdayCake}/>
                        <ProfileInfo title="Salary" value={ clientData.monthlyPay + " MGA"} IconComponent={FaMoneyBillWave}/>
                        <ProfileInfo title="Client n°" value={ clientData.id } IconComponent={FaInfoCircle}/>
                        </>
                    ) : (
                        <>
                        <ProfileInfo title="Name" value={"John Doe"} IconComponent={FaUser}/>
                        <ProfileInfo title="Birthdate" value={"02 Juin 1998"} IconComponent={FaBirthdayCake}/>
                        <ProfileInfo title="Salary" value={ "30000 MGA"} IconComponent={FaMoneyBillWave}/>
                        <ProfileInfo title="Client n°" value={ "xxxx-xxxx-xxx-xxx-xxx" } IconComponent={FaInfoCircle}/>
                        </>
                    )}
                </VStack>
            </Box>
        </Box>
    );
}

export default Profil;
