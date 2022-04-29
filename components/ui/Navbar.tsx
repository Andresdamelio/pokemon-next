import { useTheme, Text, Spacer, Link } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 2rem',
      backgroundColor: theme?.colors.gray900.value,
    }}>
      <NextLink href="/" passHref>
        <Link block css={{ display: 'flex', alignItems: 'center'}}>
          <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg' alt='Pokemon Ico' width={60} height={60} />{' '}
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>
      </NextLink>
      

      <Spacer css={{ flex: 1}} />

      <NextLink href="/favorites" passHref>
        <Link block>
          <Text color='white' h3>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
