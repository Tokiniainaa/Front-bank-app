import React from "react";
import { Box } from "@chakra-ui/react"
import Overview from "../Overview/Overview";
import Transaction from "../Transaction/Transaction";
import SendMoney from "../SendMoney/SendMoney";
import Settings from "../Settings/Settings";

const MainContent = ({ activeMenu }) => {
    const getContent = () => {
        switch (activeMenu) {
            case 1:
                return <Overview />;
            case 2:
                return <Transaction />;
            case 3:
                return <SendMoney />;
            case 4:
                return <Settings />;
            default:
                return <Overview />;
        }
    };

    return (
        <Box w="79vw" h="100vh">
            {getContent()}
        </Box>
    );
};

export default MainContent;
