import React from 'react';
import { Card } from '@app/components';
import { Grid, GridItem, Box, Heading } from '@chakra-ui/react';
import type { Image } from './main';

interface CardProps {
  images: Image[];
}

const CardSection = ({ images }: CardProps): JSX.Element => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {images?.map((image: Image) => {
        return (
          <GridItem w="100%" h="100%" key={image.id}>
            <Card {...image} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default CardSection;
