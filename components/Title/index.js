import { Text } from '@chakra-ui/layout';

export const SectionTitle = ({ children, ...properties }) => {
  return (
    <Text
      fontFamily="lato"
      fontWeight="bold"
      lineHeight="60px"
      ml={{ lg: '50px' }}
      fontSize={{ lg: '36px', md: '24px', sm: '21px' }}
      {...properties}
    >
      {children}
    </Text>
  );
};

export const CardTitle = ({ children, ...properties }) => {
  return (
    <Text
      fontFamily="lato"
      fontWeight="bold"
      lineHeight="60px"
      ml={{ lg: '50px' }}
      fontSize={{ lg: '24px', md: '21px', sm: '18px' }}
      {...properties}
    >
      {children}
    </Text>
  );
};
