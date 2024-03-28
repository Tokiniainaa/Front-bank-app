import Profil from "./Profil/Profil"
import Dashboard from "./Dashboard/Dashboard"
import { Flex } from "@chakra-ui/react"

const Overview = ()=> {
    return(
        <Flex direction={"row"} w={"100%"} h="100%">
            <Dashboard />
            <Profil />
        </Flex>
    )
}
export default Overview