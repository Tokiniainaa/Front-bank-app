import React, { useEffect, useState } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";


const TransferForm = ({ idAccountCredited, idAccountDebited }) => {
    const { register, handleSubmit, setValue } = useForm();
    const [showDateInput, setShowDateInput] = useState(false);

    useEffect(()=>{
        setValue("idAccountCredited", idAccountCredited);
        setValue("idAccountDebited", idAccountDebited);
    }, [setValue,idAccountCredited,idAccountDebited])


    const onSubmit = (data) => {
        console.log(data);
    };

    const handleScheduledClick = () => {
        setShowDateInput(true);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="start">
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
