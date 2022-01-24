import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  SimpleGrid,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function CriarUsuario() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Box p={10}>
      <Heading>Cadastrar Jogador</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={[1, 2]} spacing={[5, 10]} py={6}>
          
          <FormControl id="email" isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="text"
              {...register("email", {
                required: "Obrigatório",
                validate: (value) =>
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ||
                  "Informe um e-mail válido",
              })}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormErrorMessage fontWeight={700}>
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>


        </SimpleGrid>
        <Button colorScheme="blue" type="submit">
          Button
        </Button>
      </form>
    </Box>
  );
}
