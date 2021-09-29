import { Image } from '@chakra-ui/image';
import {
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Text,
  VStack
} from '@chakra-ui/layout';
import { useRouter } from 'next/dist/client/router';

import { AlternateButton, PrimaryButton } from '../Buttons';
import Card from './index';

export const ProfileCard = ({ name, imgSrc, ...properties }) => {
  const router = useRouter();
  const onEditProfile = () => router.push('/profile/edit');
  return (
    <Card
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h={{ lg: '340px' }}
      w={{ lg: '280px' }}
      {...properties}
    >
      <Image src={imgSrc} w={{ lg: '140px' }} h={{ lg: '140px' }} />
      <Text mt={{ lg: '10px' }} fontSize="24px" fontWeight="bold">
        {name}
      </Text>
      <AlternateButton mt={{ lg: '20px' }} w="240px" onClick={onEditProfile}>
        Edit Profil
      </AlternateButton>
    </Card>
  );
};

export const SellerProfileCard = ({
  storeId,
  name,
  imgSrc,
  isStoreExist,
  ...properties
}) => {
  const router = useRouter();
  const onEditProfile = () => router.push('/profile/edit');
  const onEditStore = () => router.push(`/store/edit/${storeId}`);
  const onCreateStore = () => router.push('/store/create');

  return (
    <Card
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h={{ lg: '340px' }}
      w={{ lg: '280px' }}
      {...properties}
    >
      <Image src={imgSrc} w={{ lg: '140px' }} h={{ lg: '140px' }} />
      <Text mt={{ lg: '10px' }} fontSize="24px" fontWeight="bold">
        {name}
      </Text>
      <AlternateButton mt={{ lg: '20px' }} w="240px" onClick={onEditProfile}>
        Edit Profil
      </AlternateButton>
      <PrimaryButton
        mt={{ lg: '20px' }}
        w="240px"
        onClick={isStoreExist ? onEditStore : onCreateStore}
      >
        {isStoreExist ? 'Edit Toko' : 'Tambahkan Toko'}
      </PrimaryButton>
    </Card>
  );
};

export const OrderCard = ({
  noPesanan,
  noResi,
  imgSrc,
  status,
  nameProduct,
  variance,
  qty,
  totalPrice
}) => {
  return (
    <Card w={{ lg: '65vw' }} h={{ lg: '270px' }} mt={{ lg: '20px' }}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem colSpan={6} h={{ lg: '60px' }}>
          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mt="20px"
            mx="40px"
            fontSize="18px"
            fontWeight="normal"
            borderBottom="1.5px solid #DEDEDE"
            pb="10px"
          >
            <HStack spacing={3}>
              <Text> No Pesanan:</Text>
              <Text fontWeight="bold">{noPesanan}</Text>
              <Text>| No Resi:</Text>
              <Text fontWeight="bold">{noResi}</Text>
            </HStack>
            <HStack spacing={3}>
              <Text>Status :</Text>
              <Text fontWeight="bold">{status}</Text>
            </HStack>
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            w={{ lg: '150px' }}
            src={imgSrc}
            h={{ lg: '150px' }}
            ml={{ lg: '40px' }}
            borderRadius="10px"
          />
        </GridItem>
        <GridItem colSpan={5} ml={{ lg: '48px' }}>
          <Flex flexDir="row" justifyContent="space-between">
            <VStack spacing={3} alignItems="left">
              <Text fontSize="21px" fontWeight="bold">
                {nameProduct}
              </Text>
              <Text fontSize="18px" color="#52575C">
                Variasi : {variance}
              </Text>
              <Text fontSize="18px" color="#52575C">
                Kuantitas : {qty} buah
              </Text>
              <Spacer />
              <HStack spacing={2}>
                <Text fontSize="18px" color="#52575C">
                  Total Pesanan:
                </Text>
                <Text fontSize="21px" fontWeight="bold">
                  Rp{totalPrice}
                </Text>
              </HStack>
            </VStack>

            <Flex
              flexDir="column"
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <PrimaryButton mr="20px" alignItems="center">
                Pesanan Diterima
              </PrimaryButton>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Card>
  );
};
