import { Flex } from "@chakra-ui/react"
import ReceiverContainer from "./ReceiverContainer/ReceiverContainer"
import ReceveirProfil from "./ReceveirProfil/ReceveirProfil"
import { useState } from "react"

const SendMoney = () => {
    const [receiver, setReceiver] = useState(null);

    const handleReceiverMethod = (receiver) => {
        setReceiver(receiver)
    }
    return(
        <Flex direction="row" h="100vh">
            <ReceiverContainer handleReceiverMethod={handleReceiverMethod}></ReceiverContainer>
            <ReceveirProfil receiver={receiver}></ReceveirProfil>
        </Flex>
    )
}
export default SendMoney