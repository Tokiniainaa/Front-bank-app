import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../../clientInfo.json";
import { Box, Text, Checkbox, Select, Button, Flex, Input} from "@chakra-ui/react";
import TransactionDetailsModal from "./TransactionDetailsModal/TransactionDetailsModal";
import AddButton from "../AddButton/AddButton";
import TransactionFormContainer from "./TransactionFormContainer/TransactionFormContainer";

const Category = [
    'Food_and_Drinks',
    'Online_Shopping',
    'Housing',
    'Vehicle',
    'Leisure',
    'Multimedia_and_Computers',
    'Financial_Expenses',
    'Investments',
    'Income',
    'Other',
    'Unknown'
];

const Transaction = () => {
 const baseUrl = process.env.REACT_APP_BASE_URL;
 const clientId = data.id_client;
 const [transactions, setTransactions] = useState();
 const [checkedTransactionIds, setCheckedTransactionIds] = useState([]); 
 const [selectedCategory, setSelectedCategory] = useState('');
 const [categoryType, setCategoryType] = useState('');
 const [searchTerm, setSearchTerm] = useState(''); 

 useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/transaction/byClientId?id=${clientId}`);
      if (response) {
        setTransactions(response.data);
      }
    };
    fetchData();
 }, [baseUrl, clientId]);

 const handleCheckboxChange = (transaction) => {
    setCheckedTransactionIds((prev) => {
      if (prev.includes(transaction.id)) {
        return prev.filter((id) => id !== transaction.id);
      } else {
        return [...prev, transaction.id];
      }
    });
 };

 const handleCategorize = () => {
   /*   console.log(`Transactions ID: ${checkedTransactionIds}, Category: ${selectedCategory}, Type: ${categoryType}`);*/
      try{
        const response = axios.post(`${baseUrl}/transaction/categorizeSeveral?type=${categoryType}&name=${selectedCategory}&idTransactions=${checkedTransactionIds}`)
        console.log(response)
      }catch(err){
        console.log(err);
      }
 };

 
 const filteredTransactions = transactions ? transactions.filter(transaction =>
    transaction.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.idAccount.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.amount.toString().includes(searchTerm) ||
    (transaction.status ? 'Eligible' : 'Not eligible').toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.effectiveDate.join('-').toLowerCase().includes(searchTerm.toLowerCase())
 ) : [];

 return (
    <Box p={2}>
      <Text m={4}>Transactions</Text>
      <AddButton name={"Make new transaction"} title={"Make transaction"} form={<TransactionFormContainer />}></AddButton>
      <Input 
        placeholder="Search transactions" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        mb={4} 
      />
      {checkedTransactionIds.length > 0 && (
       <Flex gap={1} justifyContent="flex-end">
       <Select 
          placeholder="Select category" 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)} 
          w="15vw" 
       >
          {Category.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
       </Select>
       <Select 
          placeholder="Select type" 
          value={categoryType} 
          onChange={(e) => setCategoryType(e.target.value)} 
          w="15vw" 
       >
          <option value="Outgoing">Outgoing</option>
          <option value="Incoming">Incoming</option>
       </Select>
       <Button colorScheme="blue" onClick={handleCategorize}>Categorize</Button>
      </Flex>
      
      )}
      <Box>
        {filteredTransactions.length > 0 ? (
          <>
            {filteredTransactions.map((transaction, index) => (
              <Box key={index}>
                <Checkbox onChange={() => handleCheckboxChange(transaction)} />
                <TransactionDetailsModal transaction={transaction} />
              </Box>
            ))}
          </>
        ) : (
          <>
            <Text>No result found</Text>
          </>
        )}
      </Box>
    </Box>
 );
};

export default Transaction;
