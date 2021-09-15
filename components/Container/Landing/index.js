import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { Box, Text } from '@chakra-ui/react';

import { PrimaryButton } from '../../Buttons';

const Landing = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      minW="100vw"
      minH="765px"
      backgroundColor="FCFCFC"
    >
      <Flex flexDir="row" justifyContent="center">
        <Image mt="-250px" src="/images/img-landing.svg" />
        <Flex
          w={{ lg: '200px' }}
          flexDir="column"
          mt={{ lg: '124px' }}
          alignItems="center"
        >
          <Box>
            <Text
              fontFamily="The Castle Elizah"
              fontWeight="normal"
              textAlign="center"
              lineHeight="80px"
            >
              <Text fontSize={{ lg: '80px' }}>Batik Sari</Text>
              <Text fontSize={{ lg: '144px' }}>Kenongo</Text>
            </Text>
          </Box>

          <Box>
            <Text
              textAlign="center"
              fontFamily="lato"
              fontSize="24px"
              w="700px"
              mt="20px"
            >
              Sebuah hasil karya kebudayaan asli Desa Kenongo yang berkualitas,
              inovatif, dan berkelanjutan
            </Text>
          </Box>

          <PrimaryButton
            fontFamily="Lato"
            w={{ lg: '300px' }}
            h={{ lg: '60px' }}
            fontSize={{ lg: '24px' }}
            mt="55px"
          >
            Belanja Sekarang
          </PrimaryButton>
        </Flex>
        <Image pt="150px" src="/images/img-landing-2.svg" />
      </Flex>

      <Box minW="100vw" minH="765px"></Box>
    </Flex>
  );
};

export default Landing;
