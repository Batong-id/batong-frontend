import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Box, Circle, Flex, Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { redirect } from '../../../_api/helper';
import { authApi } from '../../../_api/service';
import { loginUser } from '../../../_redux/auth/authSlice';
import { InputPassword, InputText } from '../../../components/Forms';
// import { REGEX_EMAIL } from '../../../constants/regex';
import { PrimaryButton } from '../../Buttons';
import { ErrorToast, SuccessToast } from '../../Toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();
  const dispatch = useDispatch();
  const [falsePwd, setFalsePwd] = useState();

  function onSubmit(values) {
    return new Promise((resolve) => {
      try {
        const authDetail = authApi.login(values);
        dispatch(loginUser(authDetail));
        SuccessToast(
          `Hi, ${authDetail.firstName} 👋`,
          `Masuk sebagai ${authDetail.role}`
        );
        redirect('/');
      } catch (error) {
        setFalsePwd(
          error.message === 'Network Error'
            ? 'Jaringan Bermasalah'
            : 'Username/Password Salah 😟'
        );
        setTimeout(() => {
          setFalsePwd();
        }, 5000);
        ErrorToast('Gagal Login');
      }
      resolve();
    });
  }

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
          Login Ke Batong
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            mb="1rem"
            errors={errors}
            label="Email"
            name="email"
            register={register}
            validator={{
              required: 'Email tidak boleh kosong'
            }}
          />
          <InputPassword
            errors={errors}
            label="Password"
            name="password"
            register={register}
            mb="1.5rem"
            validator={{
              required: 'Password tidak boleh kosong'
            }}
          />
          {falsePwd && (
            <Text py=".5rem" color="red.500">
              {falsePwd}
            </Text>
          )}
          <PrimaryButton
            type="submit"
            w={{ lg: '330px' }}
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
          >
            Login <ArrowForwardIcon ml="10px" justifyContent="center" />
          </PrimaryButton>
        </form>
        {/* <VStack
          mt={{ lg: '20px' }}
          spacing={5}
          color="primary.brown1"
          fontSize="18px"
          fontWeight="semibold"
          fontFamily="lato"
          w={{ lg: '330px' }}
        >
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              text="Email"
              errors={errors}
              {...register('email', {
                ...validate,
                pattern: {
                  value: REGEX_EMAIL,
                  message: 'Email tidak valid'
                }
              })}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? 'text' : 'password'}
                errors={errors}
                placeholder="Masukkan password"
                {...register('password', { ...validate })}
              />
              <InputRightElement>
                <Button h="38px" fontSize="12px" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          {falsePwd && (
            <Text py=".5rem" color="red.500">
              {falsePwd}
            </Text>
          )}
          <PrimaryButton
            type="submit"
            w={{ lg: '330px' }}
            isLoading={isSubmitting}
            onClick={handleSubmit(onSubmit)}
          >
            Login <ArrowForwardIcon ml="10px" justifyContent="center" />
          </PrimaryButton>
        </VStack> */}
      </Flex>
    </Flex>
  );
};
export default Login;
