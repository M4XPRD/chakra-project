import {
  Box,
  Flex,
  Image,
  Container,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import Logo from '../logo.svg';
import ColorModeSwitcher from '../ColorModeSwitcher';

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Box as="header" py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Image src={Logo} alt="Logo" objectFit="cover" boxSize="50px" />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
