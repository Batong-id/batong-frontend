import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Box, Circle, Flex, Text, VStack } from '@chakra-ui/layout';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { authApi } from '../../../_api/service';
import { REGEX_EMAIL } from '../../../constants/regex';
import { toastErrorMessage } from '../../../utils/functions';
import { PrimaryButton } from '../../Buttons';
import { ErrorToast, SuccessToast } from '../../Toast';

const Login = () => {
  const {
    register,
    getValues,
    trigger,
    formState: { errors }
  } = useForm();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const validate = {
    required: { value: true, message: 'Silakan isi seluruh field' }
  };

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (error) => {
    error?.preventDefault();

    if (!(await trigger())) {
      toastErrorMessage({ errors, title: 'Login Gagal' });
      return;
    }

    setIsLoading(true);
    authApi
      .login({ ...getValues() })
      .then(() => SuccessToast('Login Berhasil'))
      .catch(() => ErrorToast('Login Gagal'))
      .finally(() => setIsLoading(false));
  };
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
          fontSize={{ lg: '36px', md: '24px', sm: '21px' }}
        >
          Login Ke Batong
        </Text>

        <VStack
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
          <PrimaryButton
            type="submit"
            w={{ lg: '330px' }}
            onClick={onSubmit}
            isLoading={isLoading}
          >
            Login <ArrowForwardIcon ml="10px" justifyContent="center" />
          </PrimaryButton>
        </VStack>
      </Flex>
    </Flex>
  );
};
export default Login;
