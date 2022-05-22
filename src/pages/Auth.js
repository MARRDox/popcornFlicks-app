import { HStack, Box, Image, Heading, VStack, Show } from "@chakra-ui/react";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import MoviesCollage from '../assets/MoviesCollage.jpg';

export default function Auth({ type }) {
    return (
        <HStack
            h='100vh'
            w='full'
            bg='gray.100'
            spacing={0}
        >
            <Box
                h='full'
                w='full'
            >
                { type === 'login' ? <LoginForm /> : <RegisterForm/> }
            </Box>
            <Show above='md'>
                <Box
                    w={[null, 'full', 'full']}
                    h='full'
                    bg='red.600'
                    alignItems='center'
                >
                    <VStack
                        justify='center'
                        spacing={20}
                        h='full'
                        px={9}
                        py={4}
                    >
                        <Image src={MoviesCollage} borderRadius='2xl' boxSize='4xl' boxShadow='dark-lg' objectFit='cover' />
                        <Heading w='2xl' textAlign='center' color='white'>A place where you can rate all your favorite (and hated) movies...</Heading>
                    </VStack>
                </Box>
            </Show>
        </HStack>
    );
}