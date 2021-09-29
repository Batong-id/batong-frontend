import { Input } from '@chakra-ui/react';

const FilledInput = ({
  name,
  register,
  placeholder,
  validator,
  ...properties
}) => {
  return (
    <Input
      {...properties}
      borderColor="#EBF0F5"
      borderRadius="6px"
      borderWidth="0.1rem"
      bg="white"
      _focus={{ bg: 'none', borderColor: 'primary.brown1' }}
      _hover={{ bg: 'none', borderColor: 'primary.brown1' }}
      variant="filled"
      id={name}
      placeholder={placeholder}
      {...register(name, validator)}
    />
  );
};

export default FilledInput;
