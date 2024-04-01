import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoanForm = ({idAccount , authorization}) => {
    const { register, handleSubmit, setValue } = useForm({});
    const [responseData, setResponseData] = useState(null);
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [show, setShow] = useState(false);

    useEffect(() => {
        setValue("id", idAccount);
        if(responseData){
            setShow(true);
        }
        console.log(responseData);
    }, [setValue, idAccount, responseData]);

    const onSubmit = async (data) => { 
        const newCountDivided = data.newCount / 100;
        try {
            const response = await axios.put(`${baseUrl}/account/creditAuthorization?id=${data.id}&newCount=${newCountDivided}`);
            console.log(response);
            setResponseData(response.data);
        } catch(err) {
            console.log(err);
        }
    };

    return (
       <>
        {authorization ? (
            <Text>Your account is already authorized to make an emprunt</Text>
        ) : (
            <>
            <Text marginBottom={4}>To authorize your account for a loan, you must specify a count for the initial seven days. Following this period, your interest rate will increase.</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="start">
                <FormControl variant="floating" id="newCount" marginBottom={3}>
                    <InputGroup>
                        <InputRightElement pointerEvents="none" color="gray.300" fontSize="1.2em">
                            %
                        </InputRightElement>
                        <Input
                            {...register("newCount")}
                            type="number"
                            min={1}
                            max={100}
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
                        <FormLabel>Interest rate</FormLabel>
                    </InputGroup>
                </FormControl>
                {show && responseData && ( 
                    <Text color="teal"> {responseData} </Text>
                )}
                <Button w="100%" type="submit" bg="#090d1e" _hover={{ bg: "#151d43" }} color="#fff">Authorize</Button>
            </VStack>
        </form>
        </>
        )}
       </>
    );
}
export default LoanForm;
