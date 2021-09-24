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
      borderColor="primary.grayBorder"
      borderRadius="10px"
      bg="white"
      _focus={{ bg: 'primary.gray50', borderColor: 'primary.brown1' }}
      variant="filled"
      id={name}
      placeholder={placeholder}
      {...register(name, validator)}
    />
  );
};

export default FilledInput;
