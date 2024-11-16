import { Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

export function Header() {
  return (
    <Flex as='header' bg='#E53E3E' p={4} position='sticky' top={0} color='white'>
      <NextLink href='/' passHref>
        <Heading as='h1' fontSize='xl' cursor='pointer'>
          Poké Manage
        </Heading>
      </NextLink>
    </Flex>
  );
}
