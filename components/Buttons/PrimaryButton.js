import { Button } from '@chakra-ui/button';

export const PrimaryButton = ({ children, ...properties }) => (
  <Button
    bg="primary.brown1"
    borderRadius="100px"
    color="neutral.white"
    fontWeight="700"
    px="1.875rem"
    py="0.938rem"
    _hover={{ bg: 'primary.brown2' }}
    {...properties}
  >
    {children}
  </Button>
);
