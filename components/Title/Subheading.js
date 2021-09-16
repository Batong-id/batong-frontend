import { Text } from '@chakra-ui/layout';
const Subheading = ({ children, ...properties }) => {
  return (
    <Text
      fontFamily="theCastleElizah"
      fontWeight="normal"
      lineHeight="80px"
      fontSize="64px"
      mb="20px"
      {...properties}
    >
      {children}
    </Text>
  );
};
export default Subheading;
