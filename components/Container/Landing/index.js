import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { Box, Text } from '@chakra-ui/react';

import { PrimaryButton } from '../../Buttons';
import BatongCarousel from '../../Carousel';
import Subheading from '../../Title/Subheading';

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
        <Image
          mt={{ lg: '-250px', md: '-70px', sm: '-50px' }}
          src="/images/img-landing.svg"
          position={{ lg: 'relative', sm: 'absolute' }}
          ml={{ lg: '0px', md: '-500px', sm: '-200px' }}
        />
        <Flex
          w={{ lg: '200px' }}
          flexDir="column"
          mt={{ lg: '124px', md: '100px', sm: '120px' }}
          alignItems="center"
        >
          <Box>
            <Text
              fontFamily="The Castle Elizah"
              fontWeight="normal"
              textAlign="center"
              mt={{ md: '50px', sm: '40px' }}
              lineHeight={{ lg: '80px', md: '60px', sm: '60px' }}
            >
              <Text fontSize={{ lg: '80px', md: '50px', sm: '50px' }}>
                Batik Sari
              </Text>
              <Text fontSize={{ lg: '144px', md: '80px', sm: '80px' }}>
                Kenongo
              </Text>
            </Text>
          </Box>

          <Box>
            <Text
              textAlign="center"
              fontFamily="lato"
              fontSize={{ lg: '24px', md: '21px', sm: '18px' }}
              w={{ lg: '700px', md: '500px', sm: '300px' }}
              mt={{ lg: '20px', md: '24px', sm: '24px' }}
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
        <Image
          pt={{ lg: '150px', md: '150px', sm: '300px' }}
          mr={{ lg: '0px', md: '-600px', sm: '-300px' }}
          src="/images/img-landing-2.svg"
          position={{ lg: 'relative', sm: 'absolute' }}
        />
      </Flex>

      <Flex
        minW="100vw"
        minH="765px"
        flexDir="column"
        mt={{ lg: '-200px', md: '200px', sm: '180px' }}
        px={{ lg: '100px', md: '70px', sm: '50px' }}
      >
        <Subheading>Sejarah</Subheading>

        <Flex
          flexDir={{ lg: 'row', md: 'column-reverse', sm: 'column-reverse' }}
        >
          <Text
            fontFamily="Lato"
            fontSize={{ lg: '24px', md: '21px', sm: '18px' }}
            fontWeight="light"
            textAlign="justify"
            maxW={{ lg: '600px', md: '700px', sm: '400px' }}
            lineHeight="48px"
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

          <Image
            ml={{ lg: '40px' }}
            mr={{ lg: '-40px' }}
            src="/images/img-sejarah.svg"
          ></Image>
        </Flex>
      </Flex>
      <Flex
        mt={{ md: '40px', sm: '40px' }}
        mb="100px"
        flexDir="column"
        px={{ lg: '100px', md: '70px', sm: '50px' }}
      >
        <Subheading>Klien Kami</Subheading>
        <Text
          fontFamily="Lato"
          fontSize="24px"
          fontWeight="light"
          textAlign="justify"
        >
          Mereka yang telah menggunakan jasa dan produk Batik Sari Kenongo
        </Text>
        <BatongCarousel />
      </Flex>

      <Flex
        mb="100px"
        flexDir="column"
        px={{ lg: '100px', md: '70px', sm: '50px' }}
      >
        <Subheading>Galeri</Subheading>
        <Text
          fontFamily="Lato"
          fontSize="24px"
          fontWeight="light"
          textAlign="justify"
        >
          Dokumentasi sejak awal berdirinya Batik Sari Kenongo dan Pemuda di
          Desa Kenongo
        </Text>

        <BatongCarousel />
      </Flex>

      <Flex
        mb="100px"
        flexDir="column"
        px={{ lg: '100px', md: '70px', sm: '50px' }}
      >
        <Subheading>Linimasa</Subheading>
        <Text
          fontFamily="Lato"
          fontSize="24px"
          fontWeight="light"
          textAlign="justify"
        >
          Temukan berita dan informasi terkini dari kebudayaan batik di
          Indonesia
        </Text>
        <BatongCarousel />
      </Flex>
    </Flex>
  );
};

export default Landing;
