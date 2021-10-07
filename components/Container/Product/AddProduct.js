import { HStack } from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { FormControl, Radio, RadioGroup } from '@chakra-ui/react';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
// import { Skeleton } from '@chakra-ui/react';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { NoLabelInput, NoLabelTextArea } from '../../../components/Forms';
import { AlternateButton, PrimaryButton } from '../../Buttons';
import Card from '../../Card';
import { ProductInputSelect } from '../../Forms/Select';
import { CardTitle, SectionTitle } from '../../Title';
// import { ErrorToast, SuccessToast } from '../../Toast';

const AddProduct = () => {
  const {
    // handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  // const [dataStore, setDataStore] = useState();
  // const [isLoaded, setIsLoaded] = useState(false);

  // function onSubmit(values) {
  //     return new Promise(async (resolve) => {
  //         try {
  //             const data = await storeApi.updateStorvalues();
  //             SuccessToast(`Berhasil memperbarui ${data.store.storeName}`);
  //             setTimeout(() => { }, 2000);
  //         } catch (error) {
  //             if (error.message.includes('400')) {
  //                 ErrorToast(`Nama toko sudah terpakai 😟`);
  //             }
  //         }
  //         resolve();
  //     });
  // }

  return (
    <Flex w="100vw" h="1900px">
      <Flex flexDir="column" mx="auto" mt="100px" w={{ lg: '90vw' }} h="100%">
        <SectionTitle>Tambah Produk</SectionTitle>
        <Card h={{ lg: '530px' }} mt={{ lg: '80px' }}>
          <CardTitle mt={{ lg: '60px' }}>Informasi Produk</CardTitle>
          <HStack ml={{ lg: '80px' }} mt="20px" spacing="100px">
            <Grid
              w="90%"
              h="200px"
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={4}
            >
              {' '}
              <GridItem rowSpan={1} colSpan={1} mb="8px">
                <Text fontSize="18px" color="#52575C">
                  Ketersediaan Produk
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <FormControl>
                  <RadioGroup defaultValue="" id="">
                    <HStack spacing="24px">
                      <Radio value="male" {...register('gender')}>
                        Ready stock
                      </Radio>
                      <Radio value="female" {...register('gender')}>
                        Pre-order
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Nama Produk
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <NoLabelInput
                  fontWeight="medium"
                  errors={errors}
                  name="storeName"
                  register={register}
                  placeholder="Contoh : Baju Batik Sari Kenongo"
                  // placeholder={isLoaded ? dataStore.store.storeName : ''}
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Kategori
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <ProductInputSelect
                  name="category"
                  placeholder="Masukan kategori produk"
                  errors={errors}
                  register={register}
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Keterangan Produk
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <NoLabelTextArea
                  placeholder="Tambahkan keterangan produk"
                  fontWeight="medium"
                  height="150px"
                  errors={errors}
                  name="desc"
                  register={register}
                  // placeholder={isLoaded ? dataStore.store.desc : ''}
                />
              </GridItem>
            </Grid>
          </HStack>
        </Card>

        <Card h={{ lg: '400px' }} mt={{ lg: '80px' }}>
          <CardTitle mt={{ lg: '60px' }}>Unggah produk</CardTitle>
        </Card>

        <Card h={{ lg: '300px' }} mt={{ lg: '80px' }}>
          <CardTitle mt={{ lg: '60px' }}>Harga produk</CardTitle>
          <HStack ml={{ lg: '80px' }} mt="20px" spacing="100px">
            <Grid
              w="90%"
              h="200px"
              templateRows="repeat(4, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Minimum Pemesanan
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <NumberInput defaultValue={1} clampValueOnBlur={false}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Harga Satuan
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <InputGroup>
                  <InputLeftAddon>Rp</InputLeftAddon>
                  <Input type="number" placeholder="0" />
                </InputGroup>
              </GridItem>
            </Grid>
          </HStack>
        </Card>

        <Flex
          mt="100px"
          w={{ lg: '400px' }}
          justifyContent="space-around"
          alignItems="center"
          flexDir="row"
          alignSelf="flex-end"
        >
          <PrimaryButton minW="150px">Simpan</PrimaryButton>
          <AlternateButton minW="150px">Batal</AlternateButton>
        </Flex>
      </Flex>

      {/* <Card
                mt="200px"
                mx="auto"
                display="flex"
                flexDir="column"
                justifyContent="space-around"
                w={{ lg: '90vw' }}
                h={{ lg: '600px' }}

            >
                  <RadioGroup defaultValue="" id="">
                        <HStack spacing="24px">
                            <Radio value="male" {...register('gender')}>
                                laki-laki
                            </Radio>
                            <Radio value="female" {...register('gender')}>
                                perempuan
                            </Radio>
                        </HStack>
                    </RadioGroup>

                <Box>

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
                            // placeholder={isLoaded ? dataStore.store.storeName : ''}
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
                            // placeholder={isLoaded ? dataStore.store.desc : ''}
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
                            // placeholder={isLoaded ? dataStore.store.address : ''}
                            />
                        </GridItem>
                    </Grid>
                    <Flex flexDir="column" justifyContent="center" alignItems="center">
                        <Image
                            rounded={'full'}
                            w={{ lg: '200px' }}
                            h={{ lg: '200px' }}
                        // src={isLoaded ? dataStore.store.storeImage : ''}
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
                // onClick={handleSubmit(onSubmit)}
                >
                    Simpan
                </PrimaryButton>
            </Card> */}
    </Flex>
  );
};

export default AddProduct;
