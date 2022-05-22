import { useDispatch } from "react-redux";
import {
  HStack,
  Heading,
  Flex,
  IconButton,
  Show,
  Hide,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { HiMenuAlt2 } from 'react-icons/hi';

import { uiActions } from "../store/uiSlice";

export default function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleSearchModalOpen = () => {
    dispatch(uiActions.toogleSearchComponent());
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement='left'
      >
        <DrawerOverlay />
        <DrawerContent>
          Hola
        </DrawerContent>
      </Drawer>
      <HStack
        minW='100%'
        backgroundColor='red.600'
        h='70px'
        color='white'
      >
        <Flex
          w='full'
          h='full'
          align='center'
          direction='row'
          justify='space-between'
          px={8}
        >
          <Show breakpoint="(min-width: 768px)">
            <Heading>PopcornFlicks</Heading>
          </Show>
          <Hide breakpoint="(min-width: 768px)">
            <IconButton
              bgColor='red.500'
              w={20}
              shadow='md'
              h={20}
              fontSize='20px'
              icon={<HiMenuAlt2 />}
              onClick={onOpen}
            />
          </Hide>
          <IconButton
            shadow='md'
            onClick={handleSearchModalOpen}
            icon={<BiSearchAlt />}
            bgColor='red.500'
            w={20}
            h={20}
            rounded='full'
            fontSize='20px'
          />
        </Flex>
      </HStack>
    </>
  );
}