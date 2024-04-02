import React, { useState ,useEffect } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Select, Text } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import data from "../../../clientInfo.json";
import axios from "axios";

const MultiTransferForm = ({ idAccountCredited }) => {
    const [allAccount, setAllAccount] = useState()
    const { register, handleSubmit, control, reset, getValues, setValue } = useForm({
      defaultValues: {
        idAccountDebited: '',
      }
    });
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const clientId = data.id_client;

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get(`${baseUrl}/account/${clientId}`);
            if (response && response.data && response.data.length > 0){
                setAllAccount(response.data)
                reset({
                  ...getValues(),
                  idAccountDebited: response.data[0].id,
                });
            }
        }
        fetchData()
      }, [baseUrl, clientId, reset, getValues]) 

      useEffect(()=>{
        setValue("idAccountCreditedList", idAccountCredited);
    }, [setValue,idAccountCredited])

    const onSubmit = (data) => {
        try{
            const response = axios.post(`${baseUrl}/multiTransfer?idAccountDebited=${data.idAccountDebited}&label=${data.label}&amount=${data.amount}&idAccountCreditedList=${data.idAccountCreditedList}`)
            console.log(response)
        }catch(error){
            console.log(error);
        }
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="start">
            <Text>Choose your account: </Text>
                <FormControl variant="floating" id="idAccountDebited" marginBottom={1}>
                    <Controller
                        name="idAccountDebited"
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
                                {allAccount && (
                                    <>
                                        {allAccount.map((account) => (
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
                <FormControl variant="floating" id="amount" marginBottom={3}>
                    <InputGroup>
                        <InputRightElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                            MGA
                        </InputRightElement>
                        <Input
                            {...register("amount")}
                            placeholder=" "
                            outline="none"
                            border="none"
                            borderBottom="2px"
                            borderBottomColor="blue.700"
                            boxShadow="none"
                            sx={{
                                ':focus': {
                                    outline: 'none',
                                    boxShadow: 'none'
                                },
                            }}
                        />
                        <FormLabel>Amount</FormLabel>
                    </InputGroup>
                </FormControl>
                <FormControl variant="floating" id="label" marginBottom={3}>
                <Input
                    {...register("label")}
                    placeholder=" "
                    border="0"
                    borderBottom="2px" 
                    borderBottomColor="blue.700" 
                    sx={{
                        ':focus': {
                            outline: 'none',
                            boxShadow: 'none',
                        },
                    }}
                />
                <FormLabel>Label</FormLabel>
            </FormControl>
                
                <Button w="100%" type="submit" bg="#090d1e" _hover={{ bg: "#151d43" }} color="#fff">Confirm send</Button>
            </VStack>
        </form>
    )
}
export default MultiTransferForm