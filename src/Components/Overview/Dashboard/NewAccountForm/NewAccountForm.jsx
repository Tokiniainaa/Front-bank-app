import React, { useState ,useEffect } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Select } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import bank from "../../../../bank.json";
import data from "../../../../clientInfo.json"
import axios from "axios"

const NewAccountForm = ( ) => {
    const [banks, setBanks] = useState()
    const { register, handleSubmit, setValue, control, reset, getValues } = useForm({
        defaultValues: {
            idBank: '',
        }
    });
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const idClient = data.id_client;

    useEffect(()=> {
        const fetchData = async  () => {
            const response = await axios.get(`${baseUrl}/bank/all`)
            if (response.data){
                setBanks(response.data)
                reset({
                    ...getValues(),
                    idBank: response.data[0].id
                })
            }
        }
        fetchData()
    }, [baseUrl, reset, getValues])

    useEffect(() => {
        setValue("idClient", idClient);
        
    }, [setValue, idClient]);

    const onSubmit = (data) => {
        try{
            const response = axios.post(`${baseUrl}/account/new`, {
                balance: data.balance,
                idClient: data.idClient,
                idBank: data.idBank,
                name: data.name
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="start">
                <FormControl variant="floating" id="balance" marginBottom={3}>
                    <InputGroup>
                        <InputRightElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                            MGA
                        </InputRightElement>
                        <Input
                            {...register("balance")}
                            placeholder=" "
                            isRequired
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
                        <FormLabel>Balance</FormLabel>
                    </InputGroup>
                </FormControl>
                <FormControl variant="floating" id="idBank" marginBottom={3}>
                    <Controller
                        name="idBank"
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
                                {banks ? (
                                    <>
                                        {banks.map((bank) => (
                                        <option key={bank.id} value={bank.id}>
                                            {bank.name}
                                        </option>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        {bank.map((bank) => (
                                        <option key={bank.id} value={bank.id}>
                                            {bank.name}
                                        </option>
                                        ))}
                                    </>
                                )}
                            </Select>
                        )}
                    />
                </FormControl>
                <Button w="100%" type="submit" bg="#090d1e" _hover={{ bg: "#151d43" }} color="#fff">Add account</Button>
            </VStack>
        </form>
    );
};

export default NewAccountForm;
