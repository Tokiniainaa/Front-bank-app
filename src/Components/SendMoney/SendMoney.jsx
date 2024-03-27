import { Flex } from "@chakra-ui/react"
import ReceiverContainer from "./ReceiverContainer/ReceiverContainer"
import ReceveirProfil from "./ReceveirProfil/ReceveirProfil"

const SendMoney = () => {
    return(
        <Flex direction="row" h="100vh">
            <ReceiverContainer></ReceiverContainer>
            <ReceveirProfil></ReceveirProfil>
        </Flex>
    )
}
export default SendMoney