import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Text, Box, Flex } from "@chakra-ui/react";
import 'chart.js/auto';

const Chart = ({ datas }) => (
    <Box marginTop={4}>
        <Text textAlign={'left'}>Growth Analyse </Text> 
        <Box marginInline="auto" marginBlock={2} w="25vw"> 
            <Flex direction="column" justifyContent="center" alignItems="center">
                <Pie data={datas}  />
            </Flex>
        </Box>
    </Box>
);

export default Chart;