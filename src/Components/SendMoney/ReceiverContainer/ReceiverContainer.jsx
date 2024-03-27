import { Box, Text } from "@chakra-ui/react"
import ReceiverList from "../ReceiverList/ReceiverList"
import AccountMock from "../../../AccountMock.json"

const ReceiverContainer = () => {
    return(
        <Box w="65%" h="100%" borderRight="1px solid" borderColor="#dbdbdb" p={6}>
            <Box w="100%" borderRadius={7} bg="currentcolor" p={7}>
                <Text fontSize="xl" color="#fff">
                    300000 MGA
                </Text>
                <Text fontSize="sm" color="gray.500">Available balance</Text>
            </Box>
            <Text fontWeight = "bold" paddingTop={4}>Choose receiver</Text>
            <ReceiverList accounts={AccountMock}></ReceiverList>
        </Box>
    )
}
export default ReceiverContainer