import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";

export default function CriarUsuario() {
  return (
    <>
      <SimpleGrid columns={[1,2]} spacing={[5,10]}>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
}
