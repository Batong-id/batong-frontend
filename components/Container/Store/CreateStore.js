import { Image } from '@chakra-ui/image';
import { Box, HStack } from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { storeApi, userApi } from '../../../_api/service';
import { NoLabelInput, NoLabelTextArea } from '../../../components/Forms';
import { PrimaryButton } from '../../Buttons';
import Card from '../../Card';
import { SectionTitle } from '../../Title';
import { ErrorToast, SuccessToast } from '../../Toast';

async function onSubmit(values) {
  try {
    const data = await storeApi.addStore(values);
    SuccessToast(`Berhasil membuat ${data.store.storeName}`);
    setTimeout(() => {
      // router.push('/authentication/login');
    }, 2000);
  } catch (error) {
    if (error.message.includes('400')) {
      ErrorToast(`Nama toko sudah terpakai 😟`);
    }
  }
}
const CreateStore = () => {
  // const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  //Fetch user's data
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    userApi.getUser().then((data) => {
      setIsLoaded(true);
      setData(data);
    });
  }, []);

  return (
    <Skeleton isLoaded={isLoaded}>
      <Flex w="100vw" h="100vh">
        <Card
          mt="100px"
          mx="auto"
          display="flex"
          flexDir="column"
          justifyContent="space-around"
          w={{ lg: '90vw' }}
          h={{ lg: '600px' }}
        >
          <Box>
            <SectionTitle>Edit Profile</SectionTitle>
          </Box>
          <HStack ml={{ lg: '80px' }} mt="-100px" spacing="100px">
            <Grid
              w="65%"
              h="200px"
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Nama Toko
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <NoLabelInput
                  fontWeight="medium"
                  errors={errors}
                  name="storeName"
                  register={register}
                  placeholder="Misalnya Batik Patramas"
                  validator={{
                    required: 'Nama toko tidak boleh kosong'
                  }}
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Deskripsi Toko
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <NoLabelTextArea
                  fontWeight="medium"
                  height="150px"
                  errors={errors}
                  name="desc"
                  register={register}
                  placeholder="Masukan deskripsi toko"
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Alamat Toko
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <NoLabelTextArea
                  fontWeight="medium"
                  height="150px"
                  errors={errors}
                  name="address"
                  register={register}
                  placeholder="Masukan alamat toko"
                />
              </GridItem>
            </Grid>
            <Flex flexDir="column" justifyContent="center" alignItems="center">
              <Image
                rounded={'full'}
                w={{ lg: '200px' }}
                h={{ lg: '200px' }}
                src={data.pict}
              />
              <Text
                mt="10px"
                color="primary.brown1"
                fontSize="18px"
                as="button"
              >
                Ubah
              </Text>
            </Flex>
          </HStack>
          <PrimaryButton
            alignSelf="center"
            w="175px"
            mt="80px"
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
          >
            Simpan
          </PrimaryButton>
        </Card>
      </Flex>
    </Skeleton>
  );
};

export default CreateStore;
