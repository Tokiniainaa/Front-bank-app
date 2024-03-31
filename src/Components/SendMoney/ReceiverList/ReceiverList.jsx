import React, { useState, useRef } from 'react';
import { Box, IconButton, HStack, Text, Image, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Avatar from "../../../pictures/avatar.png"

const ReceiverList = ({ accounts, handleReceiver }) => {
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
    <Box position="relative" width="full" overflow="hidden" h="max-content">
       <Flex direction="row" gap={3} justifyContent="flex-end">
            <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            onClick={handlePrev}
            />
            <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            onClick={handleNext}
            position="relative"
            />
       </Flex>
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
          <Box key={account.id} mx={2} cursor={'pointer'} onClick={()=>handleReceiver(account)}>
                <Image 
                    src={Avatar}
                    alt="receiver image"
                    borderRadius="full"
                    boxSize="60px"
                    mx="auto"
                ></Image>
                <Flex gap={2}>
                    <Text>{account.firstname}</Text>
                    <Text>{account.lastname} ({account.name})</Text>
                </Flex>
          </Box>
        ))}
      </HStack>
    </Box>
 );
};

export default ReceiverList;
