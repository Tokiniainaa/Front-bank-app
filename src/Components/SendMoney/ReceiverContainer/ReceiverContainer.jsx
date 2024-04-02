import React, { useState, useEffect } from "react";
import { Box, Text, Button, List, ListItem, Input, Divider } from "@chakra-ui/react";
import ReceiverList from "../ReceiverList/ReceiverList";
import data from "../../../clientInfo.json";
import MultiTransferForm from "../MultiTransferForm/MultiTransferForm"
import axios from "axios";

const ReceiverContainer = ({ handleReceiverMethod }) => {
 const baseUrl = process.env.REACT_APP_BASE_URL;
 const clientId = data.id_client;
 const [receivers, setReceivers] = useState();
 const [ownAccounts, setOwnAccounts] = useState();
 const [balance, setBalance] = useState(0);
 const [filteredReceivers, setFilteredReceivers] = useState([]);
 const [selectedReceivers, setSelectedReceivers] = useState([]);
 const [multiTransferEnabled, setMultiTransferEnabled] = useState(false);
 const [searchQuery, setSearchQuery] = useState('');
 const [selectedReceiverIds, setSelectedReceiverIds] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/account/all`);
      if (response) {
        setReceivers(response.data);
      }
    };
    fetchData();
 }, [baseUrl]);

 useEffect(() => {
    if (receivers) {
      const filtered = receivers.filter(receiver => receiver.idClient !== clientId);
      setFilteredReceivers(filtered);
    }
 }, [clientId, receivers]); 

 useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/account/${clientId}`);
      if (response) {
        setOwnAccounts(response.data);
      }
    };
    fetchData();
 }, [baseUrl, clientId]);

 useEffect(() => {
    if (ownAccounts) {
      const dynamicBalances = ownAccounts.map(item => parseInt(item.balance));
      setBalance(dynamicBalances.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    }
 }, [ownAccounts]);
 useEffect(() => {
    if (searchQuery) {
      const filtered = filteredReceivers.filter(receiver =>
        receiver.firstname.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredReceivers(filtered);
    } else {
      setFilteredReceivers(receivers?.filter(receiver => receiver.idClient !== clientId));
    }
 }, [searchQuery, receivers, clientId]);

 const handleReceiverClick = (receiver) => {
    setSelectedReceivers(prevSelectedReceivers => {
      const receiverId = receiver.id;
      if (prevSelectedReceivers.includes(receiver)) {
        return prevSelectedReceivers.filter(r => r.id !== receiverId);
      } else {
        return [...prevSelectedReceivers, receiver];
      }
    });

    setSelectedReceiverIds(prevSelectedReceiverIds => {
      const receiverId = receiver.id;
      if (prevSelectedReceiverIds.includes(receiverId)) {
        return prevSelectedReceiverIds.filter(id => id !== receiverId);
      } else {
        return [...prevSelectedReceiverIds, receiverId];
      }
    });
 };

 return (
    <Box w="65%" h="100%" borderRight="1px solid" borderColor="#dbdbdb" p={6}
    overflowY="auto"
    __css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '&::-ms-scrollbar': {
          display: 'none',
        },
        '&::-webkit-scrollbar-track': {
          display: 'none',
        },
        '&::-webkit-scrollbar-thumb': {
          display: 'none',
        },
      }}
    >
      <Box w="100%" borderRadius={7} bg="currentcolor" p={7}>
        <Text fontSize="xl" color="#fff">
          {balance} MGA
        </Text>
        <Text fontSize="sm" color="gray.500">Available balance</Text>
      </Box>
      <Text fontWeight="bold" paddingTop={4}>Choose receiver</Text>
      <Input
        type="text"
        placeholder="Search receivers"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredReceivers && filteredReceivers.length > 0 ? (
        multiTransferEnabled ? (
          <ReceiverList
            accounts={filteredReceivers}
            handleReceiver={handleReceiverClick}
            multiTransferEnabled={multiTransferEnabled}
          />
        ) : (
          <ReceiverList
            accounts={filteredReceivers}
            handleReceiver={handleReceiverMethod}
          />
        )
      ) : (
        <Text>Loading receivers...</Text>
      )}

        {selectedReceivers.length > 0 && (
         <Box mt={4}>
            <Text fontWeight="bold" paddingTop={4}>Selected Receivers:</Text>
            <List spacing={3}>
              {selectedReceivers.map((receiver, index) => (
                <ListItem key={index}>
                  {receiver.firstname} {receiver.lastname} ({receiver.id})
                </ListItem>
              ))}
            </List>
            <Divider marginBlock={8}/>
            <MultiTransferForm idAccountCredited={selectedReceiverIds} />
         </Box>
        )}

      <Button onClick={() => setMultiTransferEnabled(!multiTransferEnabled)}>
        {multiTransferEnabled ? "Cancel Multi Transfer" : "Make Multi Transfer"}
      </Button>
    </Box>
 );
};

export default ReceiverContainer;
