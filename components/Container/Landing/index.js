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
        <Image mt="-250px" src="/images/img-landing.svg" position="relative" />
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
        <Image pt="150px" src="/images/img-landing-2.svg" position="relative" />
      </Flex>

      <Flex minW="100vw" minH="765px" flexDir="column" mt="-200px" px="100px">
        <Text
          fontFamily="theCastleElizah"
          fontWeight="normal"
          lineHeight="80px"
          fontSize="64px"
          mb="20px"
        >
          Sejarah
        </Text>

        <Flex flexDir="row">
          <Text
            fontFamily="Lato"
            fontSize="24px"
            fontWeight="light"
            textAlign="justify"
            maxW={{ lg: '600px' }}
          >
            <Text style={{ textIndent: 50 }}>
              Batik Sari Kenongo lahir di Desa Kenongo pada tahun 1997, sebagai
              hasil karya kreasi dari Painah. Motif utama dari batik ini adalah
              Bunga Sirih Sunduk Kentang.
            </Text>
            <br />
            <Text style={{ textIndent: 50 }}>
              Batik Sari Kenongo merupakan nama batik yang motifnya selalu
              mengikuti kebutuhan penggunanya, sehingga bisa menerima permintaan
              penggabungan motif atau inovasi produk. Batik Sari Kenongo juga
              selalu mengedepankan kualitas seperti bahan kain dan ketahanan
              pewarna alami yang digunakan.
            </Text>
          </Text>

          <Image ml="40px" mr="-40px" src="/images/img-sejarah.svg"></Image>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Landing;
