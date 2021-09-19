import { client } from '_api/service';
import { loginUser } from '_redux/auth/authSlice';
import { Button, Text } from '@chakra-ui/react';
import { InputPassword, InputText } from 'components/Forms';
import { SuccessToast } from 'components/Toast';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const Login = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const dispatch = useDispatch();
  const [falsePwd, setFalsePwd] = useState();

  async function onSubmit(values) {
    try {
      const authDetail = await client.login(values);
      dispatch(loginUser(authDetail));
      onClose();
      SuccessToast(
        `Hi, ${authDetail.name} 👋`,
        `Masuk sebagai ${authDetail.role}`
      );
    } catch (error) {
      setFalsePwd(
        error.message === 'Network Error'
          ? 'Jaringan Bermasalah'
          : 'Username/Password Salah 😟'
      );
      setTimeout(() => {
        setFalsePwd();
      }, 5000);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        mb="1rem"
        errors={errors}
        label="Username"
        name="username"
        register={register}
        validator={{
          required: 'Username tidak boleh kosong'
        }}
      />
      <InputPassword
        errors={errors}
        label="Password"
        name="password"
        register={register}
        validator={{
          required: 'Password tidak boleh kosong'
        }}
      />
      {falsePwd && (
        <Text py=".5rem" color="red.500">
          {falsePwd}
        </Text>
      )}
      <Button
        colorScheme="fukiTeal"
        color="white"
        isLoading={isSubmitting}
        type="submit"
        m="1rem 0 1rem auto"
        d="flex"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
