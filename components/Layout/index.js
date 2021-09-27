import { Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { getFirstName, getRole, isLoggedIn } from '../../_redux/auth/authSlice';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
export const paddingContainer = { base: '1rem', md: '2.5rem', lg: '100px' };

const Layout = ({ children }) => {
  const loggedIn = useSelector(isLoggedIn);
  const role = useSelector(getRole);
  const firstName = useSelector(getFirstName);
  const isSeller = role === 'seller';
  return (
    <>
      <Box minWidth="100%" h="100%" overflow="hidden" mt="90px">
        <Navbar loggedIn={loggedIn} isSeller={isSeller} firstName={firstName} />
        <Box {...styleContainer}>
          <Box
            h="100%"
            position="relative"
            style={{ marginTop: '0px' }}
            overflow="hidden"
          >
            {children}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

const styleContainer = {
  h: '100%',
  bgColor: 'white'
};
export default Layout;
