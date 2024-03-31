import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Box, Text,Flex ,Input,Button} from "@chakra-ui/react";
import 'chart.js/auto';


const data = {
    labels: [
        'Solde',
        'Amount',
        'Category'
      ],
      datasets: [{
        data: [100, 100,100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
};

const MyChart = () => (
    <Flex flexDirection={"column"} paddingLeft={"5%"} w={"60%"} h={"70%"} margin={"0 auto"}> 
        <Text fontSize={"larger"} fontWeight={"700"} marginBottom={"20px"}>Growth Analyse</Text> 
        <Pie  data={data}  />
    </Flex>
);

export default MyChart;