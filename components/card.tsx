import React, { useState } from 'react';
import {
  Card as CardWrapper,
  CardBody,
  Image,
  Divider,
  CardFooter,
} from '@chakra-ui/react';
import Modal from './modal';
import type { Image as ImageType } from '@app/views/home/main';

const Card = ({ id, image, comments }: ImageType): JSX.Element => {
  return (
    <React.Fragment>
      <CardWrapper maxW="sm">
        <CardBody>
          <Image
            height={250}
            objectFit="cover"
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width="100%"
            objectPosition="top"
          />
        </CardBody>
        <Divider />
        <CardFooter>
          <Modal cardId={id} comments={comments} />
        </CardFooter>
      </CardWrapper>
    </React.Fragment>
  );
};

export default Card;
