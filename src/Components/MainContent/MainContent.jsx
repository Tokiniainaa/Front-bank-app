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
                return <Settings/>;
            default:
                return <Overview />;
        }
    };

    return (
        <Box 
        w="79vw" 
        h="100vh" 
        maxH="100vh" 
        overflow={"auto"}
        __css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '&::-ms-scrollbar': {
              display: 'none',
            },
            '&::-webkit-scrollbar-track': {
              display: 'none',
            },
            '&::-webkit-scrollbar-thumb': {
              display: 'none',
            },
          }}>
            {getContent()}
        </Box>
    );
};

export default MainContent;
