import React from 'react';
import { Box, Image, Text, Flex, Icon, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, VStack } from "@chakra-ui/react";
import Avatar from "../../../pictures/avatar.png";
import { BellIcon, EmailIcon } from "@chakra-ui/icons";
import ProfileInfo from './ProfilInfo/ProfilInfo';
import { FaBirthdayCake, FaUser, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa';

const Profil = () => {
    return (
        <Box w="35%" h="100%" p={4}>
            <Flex direction="row" justifyContent="flex-end" gap={5}>
                <Popover>
                    <PopoverTrigger>
                        <Icon as={EmailIcon} w={4} h={4} cursor="pointer" color="#090d1e" />
                    </PopoverTrigger>
                    <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2} >
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Email</PopoverHeader>
                        <PopoverBody>
                            <Text>No message yet</Text>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Icon as={BellIcon} w={4} h={4} cursor="pointer" color="#090d1e" />
                    </PopoverTrigger>
                    <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2}> 
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Notifications</PopoverHeader>
                        <PopoverBody>
                            <Text>There's no notification yet.</Text>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
            <Box marginTop="16vh">
                <Image 
                    src={Avatar}
                    alt="client image"
                    borderRadius="full"
                    boxSize="100px"
                    mx="auto"
                ></Image>
                <VStack marginLeft={7} spacing={4} align={"stretch"} marginTop={12}>
                    <ProfileInfo title="Name" value="John Doe" IconComponent={FaUser}/>
                    <ProfileInfo title="Birthdate" value="02-12-02" IconComponent={FaBirthdayCake}/>
                    <ProfileInfo title="Salary" value="300000 MGA" IconComponent={FaMoneyBillWave}/>
                    <ProfileInfo title="Account number" value="xxxx-xxxx-xxxx-xxxx" IconComponent={FaInfoCircle}/>
                </VStack>
            </Box>
        </Box>
    );
}

export default Profil;
