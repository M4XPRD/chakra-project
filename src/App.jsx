import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Container,
  Divider,
} from '@chakra-ui/react';
import Logo from './Logo';
import Header from './components/Header';
import CardList from './components/CardList';
import posts from './utils/posts';
import theme from './utils/theme';

const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Container maxW="container.lg">
      <Box py="2">
        <Heading size="2xl">
          Chakra UI Demo Page
        </Heading>
        <Text fontSize="xl">Hello from Chakra UI Components</Text>
      </Box>
      <Divider />
      <CardList cards={posts} />
    </Container>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit
            {' '}
            <Code fontSize="xl">src/App.js</Code>
            {' '}
            and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);

export default App;
