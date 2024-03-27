import { Box, Text } from "@chakra-ui/react"
import Mock from "../../../mock.json"
import AccountsContainer from "./AccountsContainer/AccountsContainer"

const Dashboard = () => {
    return(
        <Box w="65%" h="100%" borderRight="1px solid" borderColor="#dbdbdb" p={6}>
            <Text>
                Overview
            </Text>
            <AccountsContainer accounts={Mock}></AccountsContainer>
        </Box>
    )
}
export default Dashboard