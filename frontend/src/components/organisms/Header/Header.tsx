import { Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

export function Header() {
  return (
    <Flex as='header' bgColor='gray.100' p={4} position='sticky' top={0}>
      <NextLink href='/' passHref>
        <Heading as='h1' fontSize='xl' cursor='pointer'>
          Poké Manage
        </Heading>
      </NextLink>
    </Flex>
  );
}
