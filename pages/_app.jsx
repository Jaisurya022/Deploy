import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
