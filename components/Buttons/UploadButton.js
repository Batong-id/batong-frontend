import { Button } from '@chakra-ui/button';

export const UploadButton = ({ children, ...properties }) => (
  <Button
    bg="#FFFFFF"
    borderRadius="10px"
    boxSizing="border-box"
    border="1px dashed #7B849A"
    _hover={{ borderColor: 'primary.brown2' }}
    {...properties}
  >
    {children}
  </Button>
);
