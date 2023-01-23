import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome to my Nextron desktop app</p>
      <Link href="/sample">
        <a>Go to sample page</a>
      </Link>
    </>
  );
};

export default Home;
