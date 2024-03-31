import React, { useState, useEffect } from "react";
import { Box, Text,Flex ,Input,Button} from "@chakra-ui/react";
import Mock from "../../../mock.json";
import AccountsContainer from "./AccountsContainer/AccountsContainer";
import AddButton from "../../AddButton/AddButton";
import statement from "../../../statement.json";
import DataTable from "./Datatable/DataTable";
import NewAccountForm from "./NewAccountForm/NewAccountForm";
import axios from "axios";
import data from "../../../clientInfo.json"
import Chart from "../../../Components/Chart/chart"

const Dashboard = () => {
    const [id, setId] = useState(null)
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const clientId = data.id_client;
    const [allAccount, setAllAccount] = useState()

    useEffect(()=>{
      const fetchData = async () => {
          const response = await axios.get(`${baseUrl}/account/${clientId}`);
          if (response){
              setAllAccount(response.data)
          }
      }
      fetchData()
  }, [baseUrl, clientId])

  console.log(allAccount)

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
    console.log(account)
    setId(account.id)
 }

 useEffect(()=>{
    if(id){
        console.log(id)
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
      <DataTable columns={columns} data={statement} />
      <Flex bg={"white"} flexDirection={"column"} w={"90%"} h={"30%"} margin={"0 auto"} padding={"3% 3%"}>
      <Flex >
        <Box w={"50%"}>
          <Text fontSize={"12px"} fontWeight={"700"} marginBottom={"2%"}>
            Start Date
          </Text >
          <Input type="date" w={"95%"} fontSize={"12px"} fontWeight={"600"}></Input>
        </Box>
        <Box w={"50%"}> 
          <Text fontSize={"12px"} fontWeight={"700"} marginBottom={"2%"}>
            End Date
          </Text>
          <Input type="date" w={"95%"} fontSize={"12px"} fontWeight={"600"}></Input>
        </Box>
      </Flex>
      <Button w={"13%"} h={"17%"} fontSize={"13px"} fontWeight={"700"} marginTop={"4%"} bg={"#090d1e"} color={"white"}> Apply</Button>
      </Flex>
      <Chart/>
     
    </Box>
 );
};

export default Dashboard;
