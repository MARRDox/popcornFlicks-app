import { IoMdTrendingUp, IoMdCalendar } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import {
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Input,
  Button,
  HStack,
  Box,
  List,
  ListItem,
  ListIcon,
  IconButton,
  useColorMode,
  useColorModeValue,
  Show,
} from "@chakra-ui/react";

import { uiActions } from "../store/uiSlice";

import Navbar from "../components/Navbar";

export default function Wrapper(props) {

  const bgBody = useColorModeValue('gray.100', 'gray.800');
  const bgSidebar = useColorModeValue('white', 'gray.900');
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const { searchComponentIsOpen } = useSelector((state) => state.ui);

  const handleSearchModalOpen = () => {
    dispatch(uiActions.toogleSearchComponent());
  }

  return (
    <VStack
      h='100vh'
      w='full'
      bg={bgBody}
      spacing={0}
    >
      <Navbar />
      <Modal
        size='xl'
        isOpen={searchComponentIsOpen}
        onClose={handleSearchModalOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader fontSize='2xl' >Looking for something...</ModalHeader>
          <ModalBody>
            <Input size='lg' fontSize='2xl' placeholder="Una pelicula prrona" variant='filled' />
          </ModalBody>
          <ModalFooter>
            <Button size='lg' fontSize='2xl' colorScheme='red' >Search</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <HStack w='full' h='full' spacing={0} >
        <Show breakpoint="(min-width: 768px)" >
          <Box w='250px' h='full' shadow='lg' px={5} bgColor={bgSidebar} >
            <IconButton
              color='white'
              icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
              onClick={toggleColorMode}
              bgColor={colorMode === 'light' ? 'orange.300' : 'purple.300'}
            />

            <List spacing={7} mt={20}>
              <ListItem color='red.600' >
                <ListIcon as={IoMdTrendingUp} />
                <Link to='#' >Trending Media</Link>
              </ListItem>

              <ListItem color='red.600' >
                <ListIcon as={IoMdCalendar} />
                <Link to='#' >Coming Soon</Link>
              </ListItem>

              <ListItem color='red.600' >
                <ListIcon as={MdFavorite} />
                <Link to='#' >Favorites</Link>
              </ListItem>
            </List>
          </Box>
          <Box w='full' h='full' >
            {props.children}
          </Box>
        </Show>
      </HStack>
    </VStack>
  );
}