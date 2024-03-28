import { Box, Text } from "@chakra-ui/react"
import TransactionsData from '../../Transactionmock.json'
import TransactionDetailsModal from "./TransactionDetailsModal/TransactionDetailsModal"
import AddButton from "../AddButton/AddButton"

const Transaction = () => {
    return(
        <Box>
            <Text m={4}>Transactions</Text>
            <AddButton name={"Make new transaction"} title={"Make transaction"}></AddButton>
            <Box>
                {TransactionsData.map((transaction, index) => (
                    <TransactionDetailsModal key={index} transaction={transaction} />
                ))}
            </Box>
        </Box>
    )
}
export default Transaction