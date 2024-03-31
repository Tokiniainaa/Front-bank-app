import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Text, Box } from "@chakra-ui/react";
import 'chart.js/auto';

const Chart = ({ datas }) => (
    <Box marginInline="auto" w="fit-content"> 
        <Text textAlign="center" >Growth Analyse </Text> 
        <Box mx="auto">
            <Pie  data={datas}  />
        </Box>
    </Box>
);

export default Chart;