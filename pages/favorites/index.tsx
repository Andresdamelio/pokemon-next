import { Layout } from 'components/layouts'
import React from 'react'
import { NextPage } from 'next';

const Favorites: NextPage = () => {
  return (
    <Layout title='Listado de favoritos'>
      <h1>Pokemons favoritos</h1>
    </Layout>
  )
}

export default Favorites;