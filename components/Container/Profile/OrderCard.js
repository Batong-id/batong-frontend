import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Text,
  VStack
} from '@chakra-ui/layout';

import { PrimaryButton } from '../../Buttons';
import Card from '../../Card';

const OrderCard = () => {
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
              <Text fontWeight="bold">KAD19999</Text>
              <Text>| No Resi:</Text>
              <Text fontWeight="bold">CKCK1111999</Text>
            </HStack>
            <HStack spacing={3}>
              <Text>Status :</Text>
              <Text fontWeight="bold">Dikirim</Text>
            </HStack>
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Box
            w={{ lg: '150px' }}
            h={{ lg: '150px' }}
            bg="tomato"
            ml={{ lg: '40px' }}
            borderRadius="10px"
          />
        </GridItem>
        <GridItem colSpan={5}>
          <Flex flexDir="row" justifyContent="space-between">
            <VStack spacing={3} alignItems="left">
              <Text fontSize="21px" fontWeight="bold">
                Kain Andi Ctar Aw
              </Text>
              <Text fontSize="18px" color="#52575C">
                Variasi : Baju
              </Text>
              <Text fontSize="18px" color="#52575C">
                Kuantitas : 4 buah
              </Text>
              <Spacer />
              <HStack spacing={2}>
                <Text fontSize="18px" color="#52575C">
                  Total Pesanan:
                </Text>
                <Text fontSize="21px" fontWeight="bold">
                  Rp135.000
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
export default OrderCard;
