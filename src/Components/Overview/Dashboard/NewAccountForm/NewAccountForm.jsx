import React, { useEffect } from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Select } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import bank from "../../../../bank.json";

const NewAccountForm = ({ idAccount }) => {
    const { register, handleSubmit, setValue, control } = useForm();

    useEffect(() => {
        setValue("idAccount", idAccount);
    }, [setValue, idAccount]);

    const onSubmit = (data) => {
        console.log(data);
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
                                {bank.map((bank) => (
                                    <option key={bank.id} value={bank.id}>
                                        {bank.name}
                                    </option>
                                ))}
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
