import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';

const Links = ['BELANJA', 'LINIMASA'];

const NavLink = ({ children }) => (
  <Link
    py="0.5rem"
    px="0.75rem"
    rounded="full"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    _focus={{ fontWeight: '700', transition: 'font-weight 0.5s' }}
    href={'#'}
    fontFamily="Lato"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="neutral.bg"
        px="5rem"
        py="0.5rem"
        boxShadow="0px 8px 17px rgba(190, 190, 190, 0.25)"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <HStack>
              <Image
                alt="Logo Batong"
                src="../images/logo-batong.png"
                w="2rem"
              />
              <Text
                fontFamily="Playfair Display"
                fontWeight="900"
                fontSize="28px"
                color="primary.batong"
              >
                Batong
              </Text>
            </HStack>
          </Box>
          <HStack
            as={'nav'}
            spacing="12"
            display={{ base: 'none', md: 'flex' }}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.200'
                }}
              >
                <Text py="0.5rem" px="0.75rem" fontFamily="Lato">
                  LOGIN
                </Text>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <HStack spacing="4">
                    <Image
                      alt="Icon Login as Individual"
                      src="../images/icon-individual.png"
                      w="1.75rem"
                    />
                    <Text>Individual</Text>
                  </HStack>
                </MenuItem>
                <MenuItem>
                  <HStack spacing="4">
                    <Image
                      alt="Icon Login as Penjual"
                      src="../images/icon-penjual.png"
                      w="1.75rem"
                    />
                    <Text>Penjual</Text>
                  </HStack>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : undefined}
      </Box>
    </>
  );
};

export default Navbar;
