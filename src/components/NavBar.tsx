import React from 'react'
import { Box, Link, Flex } from '@chakra-ui/core';

import NextLink from 'next/link'
import { useMeQuery } from '../generated/graphql';

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({ }) => {
  const [{ data, fetching }] = useMeQuery()
  let body = null;

  if (fetching) {

  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='login'>
          <Link mr={4}>
            Login
        </Link>
        </NextLink>
        <NextLink href='login'>
          <Link >
            Register
        </Link>
        </NextLink>
      </>
    )
  } else {
    body = <Box>{data.me.username}</Box>
  }
  return (
    <Flex p={4} bg="tomato">
      <Box ml={"auto"}>
        {body}
      </Box>
    </Flex>
  );
}