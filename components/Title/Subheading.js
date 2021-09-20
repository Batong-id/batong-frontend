import { Text } from '@chakra-ui/layout';
const Subheading = ({ children, ...properties }) => {
  return (
    <Text
      fontFamily="theCastleElizah"
      fontWeight="normal"
      lineHeight="80px"
      fontSize={{ lg: '64px', md: '52px', sm: '44px' }}
      mb="20px"
      {...properties}
    >
      {children}
    </Text>
  );
};
export default Subheading;
