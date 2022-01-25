import { forwardRef, ForwardRefRenderFunction } from "react";
import { FormControl, FormLabel, Input as ChakraInput, InputProps as chakraInputProps } from "@chakra-ui/react";

interface InputProps extends chakraInputProps {
    name: string;
    label?: string;
}

const InputBase = ({ name, label, ...rest }: InputProps) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput

                name={name}
                id={name}
                type="email"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                    bgColor: 'gray.900'
                }}
                size="lg"
                // ref={ref}
                {...rest}

            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)