import { Box, Text } from "@chakra-ui/react"
import ReceiverList from "../ReceiverList/ReceiverList"
import AccountMock from "../../../AccountMock.json"
import Mock from "../../../mock.json"

const ReceiverContainer = ({ handleReceiverMethod }) => {
    const balances = Mock.map(item => parseInt(item.balance));

    const totalBalance = balances.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return(
        <Box w="65%" h="100%" borderRight="1px solid" borderColor="#dbdbdb" p={6}>
            <Box w="100%" borderRadius={7} bg="currentcolor" p={7}>
                <Text fontSize="xl" color="#fff">
                    {totalBalance} MGA
                </Text>
                <Text fontSize="sm" color="gray.500">Available balance</Text>
            </Box>
            <Text fontWeight = "bold" paddingTop={4}>Choose receiver</Text>
            <ReceiverList accounts={AccountMock} handleReceiver={handleReceiverMethod}></ReceiverList>
        </Box>
    )
}
export default ReceiverContainer