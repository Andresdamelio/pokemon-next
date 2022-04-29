import type { NextPage, GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { Layout } from 'components/layouts'
import { PokeApi } from 'api'
import { PokemonListResponse, SmallPokemon } from 'interfaces'
import { PokemonCard } from 'components/pokemon';

interface Props {
  pokemons: SmallPokemon[]
};


const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Lisatdo de pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}

      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await PokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`

    }
  })

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage
