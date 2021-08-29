import { Box } from '@chakra-ui/react';

function index({ children, ...properties }) {
  return (
    <Box
      borderRadius={24}
      boxShadow="0px 10px 20px rgba(51, 51, 51, 0.1)"
      backgroundColor="primary.gray50"
      {...properties}
    >
      {children}
    </Box>
  );
}

export default index;
