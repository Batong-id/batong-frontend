import { Text } from '@chakra-ui/layout';
const ProfileTitle = ({ children, ...properties }) => {
  return (
    <Text
      fontFamily="lato"
      fontWeight="bold"
      lineHeight="60px"
      fontSize={{ lg: '36px', md: '24px', sm: '21px' }}
      {...properties}
    >
      {children}
    </Text>
  );
};
export default ProfileTitle;
