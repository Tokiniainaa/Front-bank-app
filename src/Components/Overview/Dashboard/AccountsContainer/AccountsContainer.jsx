import React, { useState, useRef } from 'react';
import { Box, IconButton, HStack, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const AccountsContainer = ({ accounts, handleAccountClicked }) => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const carouselRef = useRef(null);

 const handleNext = () => {
    const nextIndex = (currentIndex + 1) % accounts.length;
    setCurrentIndex(nextIndex);
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
 };

 const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + accounts.length) % accounts.length;
    setCurrentIndex(prevIndex);
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
 };

 return (
    <Box position="relative" width="full" overflow="hidden">
      <HStack
        ref={carouselRef}
        spacing={4}
        overflowX="scroll"
        scrollBehavior="smooth"
        padding={4}
        __css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&::-ms-scrollbar': {
            display: 'none',
          },
          '&::-webkit-scrollbar-track': {
            display: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            display: 'none',
          },
        }}
      >
        {accounts.map((account, index) => (
          <Box key={account.id} padding={4} borderRadius="md" bg="white" boxShadow="md" h="20ch" minWidth="200px" onClick={()=>handleAccountClicked(account)}>
            <Text fontSize="lg" fontWeight="bold">{account.name}</Text>
            <Text>Balance: {account.balance}</Text>
          </Box>
        ))}
      </HStack>
      <IconButton
        aria-label="Previous"
        icon={<ChevronLeftIcon />}
        onClick={handlePrev}
        position="absolute"
        left={2}
        top="50%"
        transform="translateY(-50%)"
      />
      <IconButton
        aria-label="Next"
        icon={<ChevronRightIcon />}
        onClick={handleNext}
        position="absolute"
        right={2}
        top="50%"
        transform="translateY(-50%)"
      />
    </Box>
 );
};

export default AccountsContainer;
