import React from 'react';
import { Button, Box, Text } from '@chakra-ui/react';

const TransactionCard = ({ transaction, onOpen }) => {
 return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2}>
      <Text fontSize="xl">{transaction.label}</Text>
      <Text fontSize="md">{transaction.type}</Text>
      <Text fontSize="sm">{transaction.amount} MGA</Text>
      <Text fontSize="sm">{transaction.situation.toLowerCase()}</Text>
      <Button bg={"#222b53"} _hover={{bg: "#37447d"}} color="#fff"  onClick={onOpen}>See détails</Button>
    </Box>
 );
};

export default TransactionCard;
