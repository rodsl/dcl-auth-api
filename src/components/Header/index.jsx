import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex bg="purple.100" p="3">
      <Box p="2">
        <Heading size="md">DexCraft</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="purple" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="purple">Log in</Button>
      </Box>
    </Flex>
  );
}
