import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Box, Circle, Flex, Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { redirect } from '../../../_api/helper';
import { authApi } from '../../../_api/service';
import { InputPassword, InputText } from '../../../components/Forms';
import { REGEX_EMAIL } from '../../../constants/regex';
import { PrimaryButton } from '../../Buttons';
import InputSelect from '../../Forms/Select';
import { ErrorToast, SuccessToast } from '../../Toast';

function onSubmit(values) {
  return new Promise((resolve) => {
    try {
      const data = authApi.register(values);
      SuccessToast(
        `Hai, ${data.firstName} 👋`,
        `Terdaftar sebagai ${data.role}`
      );
      redirect('/authentication/login');
    } catch (error) {
      if (error.message.includes('400')) {
        ErrorToast(`email sudah terpakai 😟`);
      }
    }
    resolve();
  });
}

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  return (
    <Flex flexDir="row" w="100vw" h={{ lg: '100vh' }}>
      <Box>
        <Flex
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          fontFamily="lato"
          zIndex="3"
          position="absolute"
          color="white"
          fontSize="24px"
          mt={{ lg: '65px' }}
          ml={{ lg: '40px' }}
        >
          <Circle size="56px" bg="white" color="black">
            <ArrowBackIcon h={6} w={10} />
          </Circle>
          <Text ml="20px">
            Kembali ke{' '}
            <Link href="/" fontWeight="bold">
              Batong
            </Link>
          </Text>
        </Flex>
        <Image src="/images/img-auth.png" w="50vw" h={{ lg: '100vh' }} />
      </Box>

      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mx="auto"
      >
        <Text
          fontFamily="theCastleElizah"
          fontWeight="normal"
          textAlign="center"
          w={{ lg: '400px' }}
          mb="1.5rem"
          fontSize={{ lg: '36px', md: '24px', sm: '21px' }}
        >
          Buat Akun Batong
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            color="primary.brown1"
            fontWeight="bold"
            mb="1rem"
            errors={errors}
            label="Nama Depan"
            name="firstName"
            register={register}
            placeholder="Masukan nama depan"
            validator={{
              required: 'Nama depan tidak boleh kosong'
            }}
          />

          <InputText
            color="primary.brown1"
            fontWeight="bold"
            mb="1rem"
            errors={errors}
            label="Nama Belakang"
            name="lastName"
            placeholder="Masukan nama belakang"
            register={register}
          />

          <InputText
            color="primary.brown1"
            fontWeight="bold"
            mb="1rem"
            errors={errors}
            label="Username"
            name="username"
            placeholder="Masukan username kamu"
            register={register}
            validator={{
              required: 'Username tidak boleh kosong',
              minLength: {
                value: 3,
                message: 'minimal 3 karakter'
              }
            }}
          />
          <InputText
            color="primary.brown1"
            fontWeight="bold"
            mb="1rem"
            text="Email"
            errors={errors}
            label="Email"
            name="email"
            placeholder="Masukan email kamu"
            register={register}
            validator={{
              required: 'Username tidak boleh kosong',
              minLength: {
                value: 3,
                message: 'minimal 3 karakter'
              },
              pattern: {
                value: REGEX_EMAIL,
                message: 'Email tidak valid'
              }
            }}
          />

          <InputPassword
            color="primary.brown1"
            fontWeight="bold"
            mb="2rem"
            errors={errors}
            label="Password"
            name="password"
            placeholder="Masukan password kamu"
            register={register}
            validator={{
              required: 'Password tidak boleh kosong',
              minLength: {
                value: 8,
                message: 'minimal 8 karakter'
              }
            }}
          />

          <InputSelect
            mb="2rem"
            label="Daftar sebagai"
            name="role"
            errors={errors}
            register={register}
          />
          <PrimaryButton
            type="submit"
            w={{ lg: '330px' }}
            isLoading={isSubmitting}
          >
            Buat Akun <ArrowForwardIcon ml="10px" justifyContent="center" />
          </PrimaryButton>
        </form>
      </Flex>
    </Flex>
  );
};
export default Register;
