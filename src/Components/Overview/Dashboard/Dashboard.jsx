import React, { useState, useEffect } from "react";
import { Box, Text,Flex ,Input } from "@chakra-ui/react";
import Mock from "../../../mock.json";
import AccountsContainer from "./AccountsContainer/AccountsContainer";
import AddButton from "../../AddButton/AddButton";
import statement from "../../../statement.json";
import DataTable from "./Datatable/DataTable";
import NewAccountForm from "./NewAccountForm/NewAccountForm";
import axios from "axios";
import data from "../../../clientInfo.json"
import Chart from "../../../Components/Chart/chart"
import { useForm } from 'react-hook-form';


const Dashboard = () => {
    const [id, setId] = useState(null)
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const clientId = data.id_client;
    const [allAccount, setAllAccount] = useState()
    const [statementValues, setStatementValues] = useState();

    const { register, getValues } = useForm({
      defaultValues: {
        startDate: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0], 
        endDate: new Date().toISOString().split('T')[0],
      },
   });


   const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'red', 
        'blue',
        'violet',
        'azure',
        'black',
        'yellow',
        'pink',
        'brown'
      ],
      hoverOffset: 4
    }]
 });

    useEffect(()=>{
      const fetchData = async () => {
          const response = await axios.get(`${baseUrl}/account/${clientId}`);
          if (response){
              setAllAccount(response.data)
          }
      }
      fetchData()
  }, [baseUrl, clientId])

  useEffect(()=>{
    if(id){
      const fetchData = async () => {
        const response = await axios.get(`${baseUrl}/getStatement?idAccount=${id}`);
        if (response){
            setStatementValues(response.data)
        }
    }
    fetchData()
    }
}, [baseUrl, id])

useEffect(() => {
  if (id) {
    const fetchData = async () => {
      const { startDate, endDate } = getValues();
      const response = await axios.get(`${baseUrl}/categories/sum?startDate=${startDate}&endDate=${endDate}&accountId=${id}`);
      if (response) {
        const labels = response.data.map(item => item.category_name);
        const data = response.data.map(item => item.total_amount);

        setChartData(prevState => ({
          ...prevState,
          labels: labels,
          datasets: [{
            ...prevState.datasets[0],
            data: data
          }]
        }));
      }
    };
    fetchData();
  }
}, [baseUrl, id, getValues]);

 const columns = React.useMemo(
    () => [
      {
        Header: 'Effective Date',
        accessor: 'effectiveDate',
        Cell: ({ value }) => value.join('-'),
      },
      {
        Header: 'Reference',
        accessor: 'reference',
      },
      {
        Header: 'Motif',
        accessor: 'motif',
      },
      {
        Header: 'Credit MGA',
        accessor: 'creditMGA',
      },
      {
        Header: 'Debit MGA',
        accessor: 'debitMGA',
      },
      {
        Header: 'Balance',
        accessor: 'balance',
      },
    ],
    []
 );

 const handleAccountClicked = (account) => {
    setId(account.id)
 }

 useEffect(()=>{
    if(id){
        //console.log(id)
    }
 }, [id])

 return (
    <Box w="69%" h="100%" borderRight="1px solid" borderColor="#dbdbdb" p={6} overflowY="auto"
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
      <Text fontSize="xl">
        Overview
      </Text>
      <AddButton title={"Add new account"} name={"Add new account"} form={<NewAccountForm />}></AddButton>
      {allAccount ? (
        <AccountsContainer handleAccountClicked={handleAccountClicked} accounts={allAccount}></AccountsContainer>
      ) : <AccountsContainer handleAccountClicked={handleAccountClicked} accounts={Mock}></AccountsContainer>}
      <Text> Account statement </Text>
      {statementValues ? (
        <>
          <DataTable columns={columns} data={statementValues} />
        </>
      ) : 
        <>
          <DataTable columns={columns} data={statement} />
        </>
      }

      <Chart datas={ chartData } />
      
      <Flex bg={"white"} flexDirection={"column"} w={"90%"} h={"30%"} margin={"0 auto"} padding={"3% 3%"}>
        <Flex >
          <Box w={"50%"}>
            <Text fontSize={"12px"} fontWeight={"700"} marginBottom={"2%"}>
              Start Date
            </Text>
            <Input type="date" w={"95%"} fontSize={"12px"} fontWeight={"600"} {...register("startDate")} />
          </Box>
          <Box w={"50%"}>
            <Text fontSize={"12px"} fontWeight={"700"} marginBottom={"2%"}>
              End Date
            </Text>
            <Input type="date" w={"95%"} fontSize={"12px"} fontWeight={"600"} {...register("endDate")} />
          </Box>
        </Flex>
      </Flex>
     
    </Box>
 );
};

export default Dashboard;
