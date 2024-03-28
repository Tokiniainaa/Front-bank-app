import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Text } from "@chakra-ui/react"

const AddButton = ({ name ,title}) => {
const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
            <Box my={4} marginLeft={3}>
                <Button onClick={onOpen}> {name} </Button>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>Form here</Text>
                  </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AddButton