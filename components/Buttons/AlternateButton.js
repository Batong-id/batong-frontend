import { Button } from '@chakra-ui/button';

export const AlternateButton = ({ children, ...properties }) => (
  <Button
    bg="neutral.white"
    borderRadius="100px"
    color="primary.brown1"
    border="1px"
    fontWeight="400"
    px="1.875rem"
    py="0.938rem"
    fontFamily="Lato"
    _hover={{ color: 'primary.brown2' }}
    {...properties}
  >
    {children}
  </Button>
);
