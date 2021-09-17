import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

import CarouselItem from '../Carousel/item';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 }
];

function BatongCarousel() {
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <Box>
      <Carousel
        breakPoints={breakPoints}
        enableSwipe={true}
        enableAutoPlay={true}
        autoPlaySpeed={4000}
        pagination={false}
        showArrows={false}
      >
        {items.map((item) => (
          <CarouselItem key={item}>{item}</CarouselItem>
        ))}
      </Carousel>
    </Box>
  );
}

export default BatongCarousel;
