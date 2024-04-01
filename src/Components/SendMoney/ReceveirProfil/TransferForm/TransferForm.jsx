import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Text, Select } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import clientData from "../../../../clientInfo.json"

const TransferForm = ({ idAccountCredited }) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const clientId = clientData.id_client;
    const [showDateInput, setShowDateInput] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduledDate, setScheduledDate] = useState('');
    const [allAccount, setAllAccount] = useState()
    const { register, handleSubmit, control, reset, getValues, setValue } = useForm({
      defaultValues: {
        idAccountDebited: '',
      }
    });

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
        setValue("idAccountCredited", idAccountCredited);
    }, [setValue,idAccountCredited])
    const onSubmit = (data) => {
        try{
            let url = `${baseUrl}/transfer?amount=${data.amount}&idAccountDebited=${data.idAccountDebited}&idAccountCredited=${data.idAccountCredited}&label=${data.label}`;
            if (isScheduled) {
                const isoDateString = new Date(scheduledDate).toISOString();
                const localDate = isoDateString.split('T')[0]; 
                url = `${baseUrl}/scheduledTransfer?amount=${data.amount}&idAccountDebited=${data.idAccountDebited}&idAccountCredited=${data.idAccountCredited}&label=${data.label}&newEffectiveDate=${localDate}`;
            }
            const response = axios.post(url)
            console.log(response)
        }catch(error){
            console.log(error);
        }
    };
    
    

    const handleScheduledClick = () => {
        setShowDateInput(true);
        setIsScheduled(true); 
    };

    return (
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
                    <InputRightElement pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    >
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

                {showDateInput && (
                    <FormControl id="date">
                        <FormLabel>Date</FormLabel>
                        <Input {...register("date")} type="date" 
                          onChange={(e) => setScheduledDate(e.target.value)}
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
                    </FormControl>
                )}
                <Button onClick={handleScheduledClick} w="100%">Make a schedule</Button>
                <Button w="100%" type="submit" bg="#090d1e" _hover={{bg: "#151d43"}} color="#fff">Confirm to send</Button>
            </VStack>
        </form>
    );
};

export default TransferForm;
