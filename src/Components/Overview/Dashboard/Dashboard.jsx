import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import Mock from "../../../mock.json";
import AccountsContainer from "./AccountsContainer/AccountsContainer";
import AddButton from "../../AddButton/AddButton";
import statement from "../../../statement.json";
import DataTable from "./Datatable/DataTable";
import NewAccountForm from "./NewAccountForm/NewAccountForm";

const Dashboard = () => {
    const [id, setId] = useState(null)
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
      <AccountsContainer handleAccountClicked={handleAccountClicked} accounts={Mock}></AccountsContainer>
      <DataTable columns={columns} data={statement} />
    </Box>
 );
};

export default Dashboard;
