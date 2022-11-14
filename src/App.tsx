import React from 'react';
import './App.css';
import { store } from './store';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.lg" centerContent>
          <Heading as="h1" size="xl">
            SNAKE GAME
          </Heading>
          //Children components
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
