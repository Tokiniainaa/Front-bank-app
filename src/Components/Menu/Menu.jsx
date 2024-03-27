import { Box, List, ListItem, VStack, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { MenuList } from "../MenuList/MenuList";
import { FaSignOutAlt } from "react-icons/fa";

const Menu = ({ onMenuItemClick }) => {
    const [activeItem, setActiveItem] = useState(null);

    return (
        <Box bg={"#090d1e"} color={"white"} w="20vw" h="100vh" p={4}>
            <VStack spacing={140} align={"stretch"}>
                <Box>
                    <Text textAlign={"left"} fontWeight={"bold"} marginLeft={3}>Numeric Bank</Text>
                </Box>
                <List spacing={5}>
                    {MenuList.map((item, index) => (
                        <ListItem
                            key={index}
                            bg={activeItem === index ? "gray.700" : "transparent"}
                            onClick={() => {
                                setActiveItem(index);
                                onMenuItemClick(item.id);
                            }}
                            px={4}
                            py={2}
                            borderRadius={"md"}
                            _hover={{ bg: "gray.700" }}
                            cursor={"pointer"}
                        >
                            <Flex justifyContent={"flex-start"} alignItems={"center"}>
                                <Box marginRight={1}>{item.icon}</Box>
                                <Text marginLeft={1}>{item.title}</Text>
                            </Flex>
                        </ListItem>
                    ))}
                </List>
                <Flex justifyContent={"flex-start"} alignItems={"center"} marginLeft={3} gap={2}>
                    <FaSignOutAlt></FaSignOutAlt>
                    <Text textAlign={"center"}>Logout</Text>
                </Flex>
            </VStack>
        </Box>
    );
};

export default Menu;
