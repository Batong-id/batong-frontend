import {
  Box,
  chakra,
  Container,
  HStack,
  Image,
  Stack,
  Text,
  VisuallyHidden
} from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      w="8"
      h="8"
      cursor={'pointer'}
      as={'a'}
      href={href}
      fontSize="32px"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'color 0.3s ease'}
      _hover={{
        color: 'neutral.black'
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function Footer() {
  return (
    <Box bg="primary.brown1" color="neutral.white" py="8">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Text fontFamily="Lato">Ikuti Media Sosial Kami</Text>

        <Stack direction={'row'} spacing="12">
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Github'} href="https://github.com/Batong-id">
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href="https://instagram.com/batong.id"
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>

      <Container
        as={Stack}
        maxW={'6xl'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing="6" justify="center" align="center">
          <HStack>
            <Image
              alt="Logo Batong"
              src="../images/logo-batong-white.png"
              w="2.5rem"
            />
            <Text
              fontFamily="Playfair Display"
              fontWeight="900"
              fontSize="heading"
              color="neutral.white"
            >
              Batong
            </Text>
          </HStack>
          <Box />
          <AiOutlineClose size="32px" />
          <Image alt="Logo KBKM" src="../images/logo-kbkm.png" w="181px" />
          <AiOutlineClose size="32px" />
          <Box />
          <Image
            alt="Logo Kemendikbud"
            src="../images/logo-kemendikbud.png"
            w="183px"
            h="111px"
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
