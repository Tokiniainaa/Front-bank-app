import React, { useState } from "react";
import Menu from "../../Components/Menu/Menu";
import MainContent from "../../Components/MainContent/MainContent";
import { Flex } from "@chakra-ui/react";

const Home = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuItemClick = (id) => {
        setActiveMenu(id);
    };

    return (
        <Flex direction="row" h="100vh">
            <Menu onMenuItemClick={handleMenuItemClick} />
            <MainContent activeMenu={activeMenu}/>
        </Flex>
    );
};

export default Home;
