import { Box, Image, Flex, Text } from "@chakra-ui/react";
import Avatar from "../../../../pictures/avatar.png"
import TransferForm from "../TransferForm/TransferForm";

const Profil = ({ receiver }) => {
    return(
        <Box p={4}>
            <Box marginTop={4} marginBottom={6}>
                <Image 
                    src={Avatar}
                    alt="receiver image"
                    borderRadius="full"
                    boxSize="60px"
                    mx="auto"
                    my={3}
                ></Image>
                <Box>
                    <Flex gap={2} justifyContent="center">
                        <Text>{receiver.firstname}</Text>
                        <Text>{receiver.lastname}</Text>
                    </Flex>
                    <Text fontSize="sm" color="gray.500" textAlign="center"> {receiver.id} </Text>
                </Box>
            </Box>
            <Text fontWeight="bold" marginBottom={4}> Payment details </Text>
            <TransferForm idAccountCredited={receiver.id} />
        </Box>
    )
}
export default Profil