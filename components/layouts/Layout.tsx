import Head from 'next/head';
import { ReactFragment } from 'react';
import { Navbar } from '../ui';

type Props = {
  children: JSX.Element | ReactFragment;
  title?: string;
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App'}</title>
        <meta name='author' content="Andres D'Amelio" />
        <meta name='description' content={`Información sobre ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
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