import { Icon } from "@chakra-ui/react"
import { ViewIcon, SettingsIcon } from "@chakra-ui/icons"
import { FaExchangeAlt, FaMoneyBillWave } from "react-icons/fa"

export const MenuList = [
    {
        id: 1, 
        title: "Overview",
        icon: <Icon as={ViewIcon} w={6} h={6} color={"white"}></Icon>
    },
    {
        id: 2, 
        title: "Transaction",
        icon: <FaExchangeAlt></FaExchangeAlt>
    },
    {
        id: 3, 
        title: "Send money",
        icon: <FaMoneyBillWave></FaMoneyBillWave>
    },
    {
        id: 4, 
        title: "Settings",
        icon: <Icon as={SettingsIcon} w={6} h={6} color={"white"}></Icon>
    }
]