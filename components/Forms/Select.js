import { Select } from '@chakra-ui/react';

const COLOR = 'primary.brown1';

export const RegisterInputSelect = ({
  name,
  register,
  placeholder,
  validator,
  ...properties
}) => {
  return (
    <Select
      {...properties}
      borderColor={COLOR}
      bg="white"
      color={COLOR}
      _focus={{ borderColor: { COLOR } }}
      variant="filled"
      id={name}
      placeholder={placeholder}
      {...register(name, validator)}
    >
      <option value="user">Pengguna</option>
      <option value="seller">Penjual</option>
    </Select>
  );
};

export const ProductInputSelect = ({
  name,
  register,
  placeholder,
  validator,
  ...properties
}) => {
  return (
    <Select
      {...properties}
      borderColor="primary.grayBorder"
      borderRadius="6px"
      borderWidth="0.1rem"
      _focus={{ bg: 'none', borderColor: { COLOR } }}
      _hover={{ bg: 'none', borderColor: { COLOR } }}
      bg="white"
      color="neutral.grey"
      variant="filled"
      id={name}
      placeholder={placeholder}
      {...register(name, validator)}
    >
      <option value="user">Kain</option>
      <option value="seller">Baju</option>
    </Select>
  );
};
