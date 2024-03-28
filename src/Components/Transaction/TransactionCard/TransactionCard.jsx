import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TransactionCard = ({ transaction, onOpen }) => {
 return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2}  onClick={onOpen}
    cursor="pointer"
    _hover={{bg: "gray.100"}}
    >
      <Text fontSize="xl">{transaction.label}</Text>
      <Text fontSize="md">{transaction.type}</Text>
      <Text fontSize="sm">{transaction.amount} MGA</Text>
      <Text fontSize="sm">{transaction.situation.toLowerCase()}</Text>
    </Box>
 );
};

export default TransactionCard;
