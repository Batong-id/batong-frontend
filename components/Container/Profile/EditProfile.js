import { Box } from '@chakra-ui/layout';
import { Grid, GridItem } from '@chakra-ui/layout';

import Card from '../../Card';

const EditProfile = () => {
  return (
    <Box w="100vw" h="100vh">
      <Card mt="400px">
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
        </Grid>
      </Card>
    </Box>
  );
};

export default EditProfile;
