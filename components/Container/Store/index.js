import { Button } from '@chakra-ui/button';
import { Box, Grid, GridItem, Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { useEffect, useState } from 'react';

import { storeApi } from '../../../_api/service';
import Card from '../../Card';
import { OrderCard, SellerProfileCard } from '../../Card/ProfileCard';
import ProfilTitle from '../../Title/ProfileTitle';

const Store = () => {
  const NAV_ITEMS = [
    { label: 'Semua', href: '#' },
    { label: 'Belum Dibayar', href: '#' },
    { label: 'Dikirim' },
    { label: 'Selesai', href: '#' },
    { label: 'Batal', href: '#' }
  ];
  const [dataStore, setDataStore] = useState();
  const [isStoreExist, setIsStoreExist] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    storeApi.getOwnStore()?.then((data) => {
      if (data) {
        setDataStore(data);
        setIsStoreExist(true);
        setIsLoaded(true);
      }
    });
  }, false);
  return (
    <Skeleton isLoaded={isLoaded}>
      <Box w="100vw" h="100vh">
        <Grid
          mt="100px"
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem
            rowSpan={3}
            colSpan={1}
            mr="75px"
            ml="75px"
            h={{ lg: '340px' }}
            w={{ lg: '280px' }}
          >
            <SellerProfileCard
              imgSrc="/images/logo-batong.png"
              name="Batong.id"
              isStoreExist={isStoreExist}
              storeId={dataStore ? dataStore.store._id : ''}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <ProfilTitle>Pesananmu</ProfilTitle>
          </GridItem>
          <GridItem colSpan={4}>
            <Card
              w={{ lg: '65vw' }}
              h={{ lg: '60px' }}
              display="flex"
              flexDir="row"
              justifyContent="space-around"
              alignItems="center"
            >
              {NAV_ITEMS.map((navItem) => (
                <Box
                  key={navItem.label}
                  as={Button}
                  variant="unstyled"
                  fontWeight="bold"
                  _hover={{
                    ':after': { width: '100%', color: '#9B6928' }
                  }}
                  _active={{
                    ':after': { width: '100%', fontWeight: 'bold' }
                  }}
                  _focus={{
                    color: '#9B6928',
                    ':after': { width: '100%', fontWeight: 'bold' },
                    boxShadow: 'none'
                  }}
                  _after={{
                    content: '""',
                    display: 'block',
                    height: '3.5px',
                    width: '0px',
                    position: 'absolute',
                    background: '#9B6928',
                    borderRadius: '3px',
                    transition: 'all 0.4s'
                  }}
                >
                  <Text>{navItem.label}</Text>
                </Box>
              ))}
            </Card>
          </GridItem>
          <GridItem colSpan={4} h={{ lg: '270px' }}>
            <OrderCard
              noPesanan="KAD19999"
              noResi="CKCK1111999"
              status="Dikirim"
              productName="Kain Andi Ctar Aw"
              variance="Baju"
              qty="4"
              totalPrice="135.000"
              imgSrc="https://www.puratos.co.id/content/dam/puratos/images/products/no_image_available-product.png"
            />
          </GridItem>
        </Grid>
      </Box>
    </Skeleton>
  );
};
export default Store;
