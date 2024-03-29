import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react"

const AddButton = ({ name ,title, form}) => {
const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
            <Box my={4} marginLeft={3}>
                <Button onClick={onOpen}> {name} </Button>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent p={3}>
                  <ModalHeader>{title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {form}
                  </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AddButton