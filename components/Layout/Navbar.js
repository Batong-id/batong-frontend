import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ChevronDownIcon } from '@chakra-ui/icons';
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
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';

import { logout } from '../../_redux/auth/authSlice';
import { SuccessToast } from '../Toast';

const Links = ['BELANJA', 'LINIMASA'];

const NavLink = ({ children, href }) => (
  <Link
    py="0.5rem"
    px="0.75rem"
    rounded="full"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    _focus={{ fontWeight: '700', transition: 'font-weight 0.5s' }}
    href={href}
    fontFamily="Lato"
  >
    {children}
  </Link>
);

const Navbar = ({ loggedIn, isSeller, firstName }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    SuccessToast('Logout Berhasil', 'Kamu telah keluar dari Batong');
    router.push('/');
  };

  const onLogin = () => router.push('/authentication/login');
  const Home = () => router.push('/');
  const onProfile = () => router.push('/profile');
  const onStore = () => router.push('/store');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position="fixed" top={0} zIndex="999" w="100vw">
        <Flex
          h="90px"
          alignItems={'center'}
          justifyContent={'space-between'}
          bg="neutral.bg"
          px="5rem"
          py="0.5rem"
          filter="drop-shadow(0px 5px 20px rgba(55, 84, 170, 0.25))"
          backgroundColor="rgba(255, 255, 255, 0.699)"
          boxShadow="rgba(46, 50, 70, 0.2) 0px 1px 10px"
          backdropFilter="blur(8px)"
          transition="background-color 1s ease 0s"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box as="button" onClick={Home}>
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
            {loggedIn && !isSeller ? (
              <Image src="images/icon-shopping-cart.svg" mr="10px" />
            ) : (
              ''
            )}
            {loggedIn ? (
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
                  <Flex
                    flexDir="row"
                    justifyContent="space-around"
                    alignItems="center"
                    bgColor="white"
                    boxShadow="0px 4px 5px rgba(190, 190, 190, 0.25)"
                    borderRadius="60px"
                    w="162px"
                    h="54px"
                  >
                    <Image
                      src="images/logo-batong.png"
                      rounded={'full'}
                      w="43px"
                      h="43px"
                      ml="10px"
                    />

                    <>
                      <Text fontSize="18px" fontWeight="bold" fontFamily="Lato">
                        {firstName}
                      </Text>
                      <ChevronDownIcon mr="8px" w={8} h={8} />
                    </>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem
                    as="button"
                    onClick={isSeller ? onStore : onProfile}
                  >
                    <Text>Akun Saya</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text>Pesanan Saya</Text>
                  </MenuItem>
                  <MenuItem as="button" onClick={onLogout}>
                    <Text>Logout</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <>
                <Link
                  as="button"
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.200',
                    borderRadius: '40px'
                  }}
                  onClick={onLogin}
                  py="0.5rem"
                  px="0.75rem"
                  fontFamily="Lato"
                >
                  LOGIN
                </Link>
              </>
            )}
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
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
