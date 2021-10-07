import { Textarea } from '@chakra-ui/react';

const FilledTextarea = ({
  name,
  register,
  placeholder,
  validator,
  ...properties
}) => {
  return (
    <Textarea
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

export default FilledTextarea;
