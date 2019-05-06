import React from 'react';
import Home from '~/containers/Home';
import Layout from '~/components/Layout';

const HomeLayout = props => (
  <Layout {...props}>
    <Home />
  </Layout>
);

export default HomeLayout;
