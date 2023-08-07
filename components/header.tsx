import React from 'react';
import { Heading, Flex, Container, Button, Box } from '@chakra-ui/react';
import Link from 'next/link';
import Modal from './modal';
const Header = (props: React.ComponentProps<any>): JSX.Element => {
  return (
    <header>
      <Box bg="teal.500" color="white" pt="4" pb="4">
        <Container maxW="container.xl">
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            {...props}
          >
            <Flex align="center" mr={5}>
              <Link href="/">
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                  Image Upload
                </Heading>
              </Link>
            </Flex>

            <Box>
              <Modal hasImage />
            </Box>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
