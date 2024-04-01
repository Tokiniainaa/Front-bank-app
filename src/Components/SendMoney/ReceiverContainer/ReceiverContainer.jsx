import React, { useState, useEffect } from "react"
import { Box, Text } from "@chakra-ui/react"
import ReceiverList from "../ReceiverList/ReceiverList"
import AccountMock from "../../../AccountMock.json"
import data from "../../../clientInfo.json"
import axios from "axios"

const ReceiverContainer = ({ handleReceiverMethod }) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const clientId = data.id_client;
    const [receivers, setReceivers] = useState()
    const [ownAccounts, setOwnAccounts] = useState()
    const [balance, setBalance] = useState(0)
    const [filteredReceivers, setFilteredReceivers] = useState([]);


    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get(`${baseUrl}/account/all`);
            if (response){
                setReceivers(response.data)
            }
        }
        fetchData()
    }, [baseUrl])


    useEffect(() => {
        if(receivers){
            const filtered = receivers.filter(receiver => receiver.idClient !== clientId);
        setFilteredReceivers(filtered);
        }
     }, [clientId, receivers]);


    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get(`${baseUrl}/account/${clientId}`);
            if (response){
                setOwnAccounts(response.data)
            }
        }
        fetchData()
        if(ownAccounts){
            const dynamicBalances = ownAccounts.map(item => parseInt(item.balance));
            setBalance(dynamicBalances.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
        }
    }, [baseUrl, clientId, ownAccounts])

    return(
        <Box w="65%" h="100%" borderRight="1px solid" borderColor="#dbdbdb" p={6}>
            <Box w="100%" borderRadius={7} bg="currentcolor" p={7}>
                {ownAccounts ? (
                    <>
                        <Text fontSize="xl" color="#fff">
                            {balance} MGA
                        </Text>
                    </>
                ) : (
                    <>
                        <Text fontSize="xl" color="#fff">
                            {balance} MGA
                        </Text>
                    </>
                )}
                <Text fontSize="sm" color="gray.500">Available balance</Text>
            </Box>
            <Text fontWeight = "bold" paddingTop={4}>Choose receiver</Text>
            {receivers ? (
                <ReceiverList accounts={filteredReceivers} handleReceiver={handleReceiverMethod}></ReceiverList>
            ) : (
                <ReceiverList accounts={AccountMock} handleReceiver={handleReceiverMethod}></ReceiverList>
            )}
        </Box>
    )
}
export default ReceiverContainer