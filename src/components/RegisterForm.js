import { VStack, Flex, FormControl, FormLabel, Input, Button, Text, Link, Heading, Container } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export default function RegisterForm() {
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
        h='auto'
        p={5}
        justify='center'
        spacing={8}
      >
        <Heading>PopcornFlicks</Heading>

        <Container>
          <FormControl>
            <FormLabel htmlFor='username' fontSize='xl' >User name:</FormLabel>
            <Input id='text' type='text' fontSize='xl' variant='filled' py={6} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='email' fontSize='xl' >Email:</FormLabel>
            <Input id='email' type='email' fontSize='xl' variant='filled' py={6} />
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
            Register
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
            Register with google
          </Button>
        </Container>
        <Link
          mt={9}
          colorScheme='red'
          href='/login'
        >
          Did you already have an account?, go to login!
        </Link>
      </VStack>
    </Flex>
  );
}