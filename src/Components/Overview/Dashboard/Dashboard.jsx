import { Box, Text } from "@chakra-ui/react"
import Mock from "../../../mock.json"
import AccountsContainer from "./AccountsContainer/AccountsContainer"
import AddButton from "../../AddButton/AddButton"

const Dashboard = () => {
    return(
        <Box w="65%" h="100%" borderRight="1px solid" borderColor="#dbdbdb" p={6}>
            <Text fontSize="xl">
                Overview
            </Text>
            <AddButton title={"Add new account"} name={"Add new account"}></AddButton>
            <AccountsContainer accounts={Mock}></AccountsContainer>
        </Box>
    )
}
export default Dashboard