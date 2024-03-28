import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Text, Flex } from '@chakra-ui/react';
import TransactionCard from '../TransactionCard/TransactionCard';

const TransactionDetailsModal = ({ transaction }) => {
 const { isOpen, onOpen, onClose } = useDisclosure();

 return (
    <>
      <TransactionCard transaction={transaction} onOpen={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{transaction.label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Reference: {transaction.reference}</Text>
            <Text>Account n°: {transaction.idAccount}</Text>
            <Text>Action: {transaction.type}</Text>
            <Text>Amount: {transaction.amount} MGA</Text>
            <Text>Status: {transaction.status ? 'Eligible' : 'Not eligible'}</Text>
            <Text>Effective date: {transaction.effectiveDate.join('-')}</Text>
            <Flex>
                <Text>Situation: </Text>
                <Text color={transaction.situation === 'SUCCESS' ? 'green' : transaction.situation === 'PENDING' ? 'blue' : 'red'} paddingLeft={1}>  {transaction.situation} </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
 );
};

export default TransactionDetailsModal;
