import { VStack, Flex, FormControl, FormLabel, Input, Button, Text, Link, Heading, Container } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginForm() {
  return (
    <Flex
      h='full'
      w='full'
      align='center'
      justify='center'
    >
      <VStack
        bg='white'
        w={['lg', 'lg', '280px', 'lg']}
        boxShadow='md'
        rounded='md'
        h='2xl'
        p={5}
        justify='center'
        spacing={8}
      >
        <Heading>PopcornFlicks</Heading>

        <Container>
          <FormControl>
            <FormLabel htmlFor='email' fontSize='xl' >Email:</FormLabel>
            <Input id='email' type='email' fontSize='xl' variant='filled'  py={6} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='password' fontSize='xl' mt={4}>Password:</FormLabel>
            <Input id='password' type='password' fontSize='xl' variant='filled' py={6} />
          </FormControl>
        </Container>

        <Container
          align='center'
        >
          <Button
            colorScheme='red'
            color='white'
            w='full'
            size='lg'
            mt={12}
            mb={2}
            fontSize='xl'
          >
            Login
          </Button>
          <Text fontSize='xl'>or</Text>
          <Button
            leftIcon={<FcGoogle />}
            colorScheme='blue'
            color='white'
            w='full'
            size='lg'
            mt={2}
            fontSize='xl'
          >
            Login with google
          </Button>
        </Container>
        <Link
          mt={9}
          colorScheme='red'
          href='/register'
        >
          Need an account?, create one!
        </Link>
      </VStack>
    </Flex>
  );
}