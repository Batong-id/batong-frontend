import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import { Box, HStack } from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';
import { FormControl, Radio, RadioGroup } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { userApi } from '../../../_api/service';
// import { REGEX_EMAIL } from '../../../constants/regex';
import { toastErrorMessage } from '../../../utils/functions';
import { PrimaryButton } from '../../Buttons';
import Card from '../../Card';
import { SectionTitle } from '../../Title';
import { ErrorToast, SuccessToast } from '../../Toast';

const EditProfile = () => {
  const router = useRouter();
  const {
    register,
    getValues,
    trigger,
    formState: { errors }
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

  //Update user's data
  const onSubmit = async (error) => {
    error?.preventDefault();

    if (!(await trigger())) {
      toastErrorMessage({ errors, title: 'Gagal memperbarui akun' });
      return;
    }
    userApi
      .updateUser({ ...getValues() })
      .then(() => SuccessToast('Akun berhasil diperbarui'))
      .catch(() => ErrorToast('Gagal memperbarui akun'))
      .finally(() => router.push('/profile'));
  };

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
          h={{ lg: '560px' }}
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
                  Nama Depan
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <FormControl isRequired>
                  <Input
                    {...register('firstName')}
                    placeholder={data.firstName}
                  />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Nama Belakang
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <FormControl isRequired>
                  <Input
                    {...register('lastName')}
                    placeholder={data.lastName}
                  />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Email
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <FormControl isRequired>
                  <Input {...register('email')} placeholder={data.email} />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Username
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <FormControl isRequired>
                  <Input
                    {...register('username')}
                    placeholder={data.username}
                  />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Nomor Telepon
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <FormControl isRequired>
                  <Input
                    {...register('phoneNumber')}
                    placeholder={data.phoneNumber}
                  />
                </FormControl>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                <Text fontSize="18px" color="#52575C">
                  Jenis Kelamin
                </Text>
              </GridItem>
              <GridItem rowSpan={1} colSpan={3}>
                <FormControl>
                  <RadioGroup defaultValue={data.gender} id="gender">
                    <HStack spacing="24px">
                      <Radio value="male" {...register('gender')}>
                        laki-laki
                      </Radio>
                      <Radio value="female" {...register('gender')}>
                        perempuan
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
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
            mt="30px"
            onClick={onSubmit}
          >
            Simpan
          </PrimaryButton>
        </Card>
      </Flex>
    </Skeleton>
  );
};

export default EditProfile;
