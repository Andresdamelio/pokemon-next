import Head from 'next/head';
import { ReactFragment } from 'react';
import { Navbar } from '../ui';

type Props = {
  children: JSX.Element | ReactFragment;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App'}</title>
        <meta name='author' content="Andres D'Amelio" />
        <meta name='description' content={`Información sobre ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>

      {/* HEader */}
      <Navbar />

      <main style={{
        padding: '20px',
      }}>
        {children}
      </main>
    </>
  )
}

export default Layout;