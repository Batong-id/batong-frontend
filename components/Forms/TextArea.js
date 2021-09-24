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
      borderColor="primary.brown2"
      bg="white"
      _focus={{ bg: 'primary.gray50', borderColor: 'primary.brown1' }}
      variant="filled"
      id={name}
      placeholder={placeholder}
      {...register(name, validator)}
    />
  );
};

export default FilledTextarea;
