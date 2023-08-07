import React from 'react';
import { Container } from '@chakra-ui/react';
import CardSection from './cards-section';

export type Comment = {
  id: number;
  comment: string;
};

export type Image = {
  id: number;
  image: string;
  comments: Comment[];
};

interface IProps {
  data: Image[];
}

const Home = ({ data }: IProps): JSX.Element => {
  return (
    <Container maxW="container.xl" mt="4">
      <CardSection images={data} />
    </Container>
  );
};

export default Home;
