import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

import Item from './Item';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 }
];

function BatongCarousel() {
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  // const addItem = () => {
  //     const nextItem = Math.max(1, items.length + 1);
  //     setItems([...items, nextItem]);
  // };

  // const removeItem = () => {
  //     const endRange = Math.max(0, items.length - 1);
  //     setItems(items.slice(0, endRange));
  // };

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
          <Item key={item}>{item}</Item>
        ))}
      </Carousel>
    </Box>
  );
}

export default BatongCarousel;
