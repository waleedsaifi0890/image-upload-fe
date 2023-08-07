import React from 'react';
import { Home } from '@app/views';
import { GetStaticPropsContext } from 'next';
import { initializeApollo, addApolloState } from '@app/utils';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@app/queries';

const Index = (): JSX.Element => {
  const { data } = useQuery(GET_POSTS);
  return <Home data={data?.images} />;
};

export async function getServerSideProps(context: GetStaticPropsContext) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_POSTS,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default Index;
