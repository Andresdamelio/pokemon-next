import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import { pokeApi } from 'api';
import { localFavorites } from 'utils';
import confetti from 'canvas-confetti';
import { Layout } from 'components/layouts';
import { Pokemon, PokemonListResponse } from 'interfaces';

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setisInFavorites] = useState(localFavorites.pokemonIsFavorite(pokemon.id))

  const onToggleFavorite = () => { 
    localFavorites.togleFavorite({ id: pokemon.id, name: pokemon.name });
    setisInFavorites(prev => !prev);

    if(!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: { x: 1, y: 0 },
      });
    }
  };

  return (
    <Layout title={`Pokemon ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default || 'image-default.png' } alt={pokemon.name} width='100%' height={200} />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>

              <Button color='gradient' ghost={!isInFavorites} onClick={onToggleFavorite}>
                {isInFavorites ? 'Eliminar de favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container direction='row' display='flex'>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={200} height={200} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={200} height={200} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={200} height={200} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={200} height={ 200 }/>
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons = data.results.map(({ name }) => ({
    params: {
      name: name.toLowerCase()
    }
  }));

  return {
    paths: pokemons,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const name = ctx.params?.name as string;

  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }
    
    return {
      props: {
        pokemon
      },
      revalidate: 60 * 60 * 24
    }
  } catch (error) {
    console.log('errr', error);
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
}



export default PokemonPage;