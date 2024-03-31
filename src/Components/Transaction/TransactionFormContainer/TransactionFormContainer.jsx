import React, { useState, useEffect } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Select, RadioGroup, Radio, Stack, Text } from "@chakra-ui/react";
import AllAccountMock from "../../../mock.json";
import { useForm, Controller } from "react-hook-form";
import Category from "../Category/Category"
import data from "../../../clientInfo.json"
import axios from "axios";

const TransactionFormContainer = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const clientId = data.id_client;
    const [allAccount, setAllAccount] = useState()
    const { register, handleSubmit, control, reset, getValues } = useForm({
      defaultValues: {
        idAccount: '', 
        actionName: ''
      }
    });

    useEffect(()=>{
      const fetchData = async () => {
          const response = await axios.get(`${baseUrl}/account/${clientId}`);
          if (response && response.data && response.data.length > 0){
              setAllAccount(response.data)
              reset({
                ...getValues(),
                idAccount: response.data[0].id,
                actionName: Category[0]
              });
          }
      }
      fetchData()
    }, [baseUrl, clientId, reset, getValues]) 

    const onSubmit = (data) => {
        try{
            const response = axios.post(`${baseUrl}/makeSupply`, {
                action: data.action,
                actionName: data.actionName,
                supplyAmount: data.balance,
                idAccount: data.idAccount,
                label: data.label
            })
            console.log(response)
        }catch(error){
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={2} align="start">
                <Controller name="action"
                control={control}
                defaultValue=" "
                render={( { field } ) => (
                    <RadioGroup {...field}>
                        <Stack direction="row" spacing={10}>
                            <Radio value="Outgoing">Spend</Radio>
                            <Radio value="Incoming">Supply</Radio>
                            <Radio value="Loan">Loan</Radio>
                        </Stack>
                    </RadioGroup>
                )}
                >

                </Controller>
                <FormControl variant="floating" id="label" marginBottom={3}>
                    <Input
                        {...register("label")}
                        placeholder=" "
                        outline="none"
                        border="0"
                        borderBottom="2px" 
                        borderBottomColor="blue.700" 
                        sx={{
                            ':focus': {
                                outline: 'none',
                                boxShadow: 'none'
                            },
                        }}
                    />
                    <FormLabel>Label</FormLabel>
                </FormControl>
                <FormControl variant="floating" id="balance" marginBottom={3}>
                    <InputGroup>
                        <InputRightElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                            MGA
                        </InputRightElement>
                        <Input
                            {...register("balance")}
                            placeholder=" "
                            outline="none"
                            border="none"
                            borderBottom="2px"
                            borderBottomColor="blue.700"
                            boxShadow="none"
                            sx={{
                                ':focus': {
                                    outline: 'none',
                                    boxShadow: 'none',
                                },
                            }}
                        />
                        <FormLabel>Balance</FormLabel>
                    </InputGroup>
                </FormControl>
                <Text>Choose account: </Text>
                <FormControl variant="floating" id="idAccount" marginBottom={1}>
                    <Controller
                        name="idAccount"
                        control={control}
                        defaultValue={''}
                        render={({ field }) => (
                            <Select
                                {...field}
                                border="0"
                                borderBottom="2px"
                                borderBottomColor="blue.700"
                                sx={{
                                    ':focus': {
                                        outline: 'none',
                                        boxShadow: 'none',
                                    },
                                }}
                            >
                                {allAccount ? (
                                    <>
                                        {allAccount.map((account) => (
                                        <option key={account.id} value={account.id}>
                                            {account.id} ({account.name})
                                        </option>
                                ))}
                                    </>
                                ) : (
                                    <>
                                        {AllAccountMock.map((account) => (
                                        <option key={account.id} value={account.id}>
                                            {account.id} ({account.name})
                                        </option>
                                ))}
                                    </>
                                )}
                            </Select>
                        )}
                    />
                </FormControl>
                <Text>
                    Choose category: 
                </Text>
                <FormControl variant="floating" id="actionName" marginBottom={3}>
                    <Controller
                        name="actionName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Select
                                {...field}
                                border="0"
                                borderBottom="2px"
                                borderBottomColor="blue.700"
                                sx={{
                                    ':focus': {
                                        outline: 'none',
                                        boxShadow: 'none',
                                    },
                                }}
                            >
                                {Category.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </Select>
                        )}
                    />
                </FormControl>
                <Button w="100%" type="submit" bg="#090d1e" _hover={{ bg: "#151d43" }} color="#fff">Make transaction</Button>
            </VStack>
        </form>
    )
}
export default TransactionFormContainer;
