import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Button, Container, Grid, Image, Card, Text } from '@nextui-org/react';

import { PokeApi } from 'api'
import { Pokemon } from 'interfaces';

import { Layout } from 'components/layouts';
import { Ability } from '../../interfaces/pokemon';

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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

              <Button color='gradient' ghost>
                Guardar en favoritos
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
  const pokemons = [...new Array(151)].map((_, index) => ({ params: { id: String(index + 1) } }));

  return {
    paths: pokemons,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await PokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage