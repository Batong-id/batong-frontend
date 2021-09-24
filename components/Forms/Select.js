import { Select } from '@chakra-ui/react';

const InputSelect = ({
  name,
  register,
  placeholder,
  validator,
  ...properties
}) => {
  return (
    <Select
      {...properties}
      borderColor="primary.brown1"
      bg="white"
      color="primary.brown1"
      _focus={{ bg: 'primary.gray50', borderColor: 'primary.brown1' }}
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

export default InputSelect;
