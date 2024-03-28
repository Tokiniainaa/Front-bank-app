import React from 'react';
import { VStack, Box, Flex, Text } from "@chakra-ui/react";
import { FaBirthdayCake } from 'react-icons/fa';
const ProfileInfo = ({ title, value, IconComponent }) => {
    const Icon = IconComponent || FaBirthdayCake; 

    const newLocal = <Text fontSize="sm" color="gray.500">{title}</Text>;
    return (
        <VStack marginLeft={7} spacing={7} align={"stretch"}>
            <Box>
                <Flex alignItems="center" gap={5}>
                    <Icon size={24} color="teal" style={{ marginRight: '0.5rem' }} />
                    <Box>
                        {newLocal}
                        <Text fontSize="md">{value}</Text>
                    </Box>
                </Flex>
            </Box>
        </VStack>
    );
};

export default ProfileInfo;
