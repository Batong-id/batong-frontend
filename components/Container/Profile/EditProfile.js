// import { ErrorToast, SuccessToast } from '../../Toast';
import { Input } from '@chakra-ui/input';
import { Box, HStack } from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Circle } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { FormControl } from '@chakra-ui/react';
// import { REGEX_EMAIL } from '../../../constants/regex';
// import { toastErrorMessage } from '../../../utils/functions';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { PrimaryButton } from '../../Buttons';
import Card from '../../Card';
// import { VStack } from '@chakra-ui/react';
import ProfileTitle from '../../Title/ProfileTitle';

const EditProfile = () => {
  const {
    register
    // getValues,
    // trigger,
    // formState: { errors }
  } = useForm();
  // const [show, setShow] = useState(false);
  // const handleClick = () => setShow(!show);

  const validate = {
    required: { value: true, message: 'Silakan isi seluruh field' }
  };

  // const [isLoading, setIsLoading] = useState(false);
  // const onSubmit = async (error) => {
  //   error?.preventDefault();

  //   if (!(await trigger())) {
  //     toastErrorMessage({ errors, title: 'Gagal membuat akun' });
  //     return;
  //   }

  //   // setIsLoading(true);
  //   // authApi
  //   //   .register({ ...getValues() })
  //   //   .then(() => SuccessToast('Akun berhasil dibuat'))
  //   //   .catch(() => ErrorToast('Gagal membuat akun'))
  //   //   .finally(() => setIsLoading(false));
  // };
  return (
    <Flex w="100vw" h="100vh">
      <Card
        mt="100px"
        mx="auto"
        display="flex"
        flexDir="column"
        justifyContent="space-around"
        w={{ lg: '90vw' }}
        h={{ lg: '560px' }}
      >
        <Box ml={{ lg: '50px' }}>
          <ProfileTitle>Edit Profile</ProfileTitle>
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
                Nama Depan
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <FormControl isRequired>
                <Input {...register('firstName', { ...validate })} />
              </FormControl>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontSize="18px" color="#52575C">
                Nama Belakang
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <FormControl isRequired>
                <Input {...register('firstName', { ...validate })} />
              </FormControl>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontSize="18px" color="#52575C">
                Email
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <FormControl isRequired>
                <Input {...register('firstName', { ...validate })} />
              </FormControl>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontSize="18px" color="#52575C">
                Nomor Telepon
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <FormControl isRequired>
                <Input {...register('firstName', { ...validate })} />
              </FormControl>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Text fontSize="18px" color="#52575C">
                Alamat
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={3}>
              <FormControl isRequired>
                <Input
                  as="textArea"
                  h="80px"
                  {...register('firstName', { ...validate })}
                />
              </FormControl>
            </GridItem>
          </Grid>
          <Flex flexDir="column" justifyContent="center" alignItems="center">
            <Circle w={{ lg: '200px' }} h={{ lg: '200px' }} bg="tomato" />
            <Text mt="10px" color="primary.brown1" fontSize="18px" as="button">
              Ubah
            </Text>
          </Flex>
        </HStack>
        <PrimaryButton alignSelf="center" w="175px">
          Simpan
        </PrimaryButton>
      </Card>
    </Flex>
  );
};

export default EditProfile;
