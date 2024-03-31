import React, { useState, useEffect } from "react"
import axios from "axios"
import data from "../../clientInfo.json"
import { Box, Text } from "@chakra-ui/react"
import TransactionsData from '../../Transactionmock.json'
import TransactionDetailsModal from "./TransactionDetailsModal/TransactionDetailsModal"
import AddButton from "../AddButton/AddButton"
import TransactionFormContainer from "./TransactionFormContainer/TransactionFormContainer"

const Transaction = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const clientId = data.id_client;
    const [transactions, setTransactions] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get(`${baseUrl}/transaction/byClientId?id=${clientId}`);
            if (response){
                setTransactions(response.data)
            }
        }
        fetchData()
    }, [baseUrl, clientId])

    return(
        <Box>
            <Text m={4}>Transactions</Text>
            <AddButton name={"Make new transaction"} title={"Make transaction"} form={<TransactionFormContainer />}></AddButton>
            <Box>
                {transactions ? (
                   <>
                     {transactions.map((transaction, index) => (
                        <TransactionDetailsModal key={index} transaction={transaction} />
                    ))}
                   </>
                ) : (
                    <>
                     {TransactionsData.map((transaction, index) => (
                        <TransactionDetailsModal key={index} transaction={transaction} />
                    ))}
                   </>
                )}
            </Box>
        </Box>
    )
}
export default Transaction