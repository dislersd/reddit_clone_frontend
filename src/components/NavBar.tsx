import React from 'react'
import { Box, Link, Flex } from '@chakra-ui/core';

import NextLink from 'next/link'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({ }) => {
  return (
    <Flex p={4} bg="tomato">
      <Box ml={"auto"}>
        <NextLink href='login'>
          <Link mr={4}>
            Login
        </Link>
        </NextLink>
        <Link >
          Register
        </Link>
      </Box>
    </Flex>
  );
}