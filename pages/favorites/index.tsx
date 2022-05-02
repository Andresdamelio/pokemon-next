import React, { useEffect, useState } from 'react'
import { NextPage } from 'next';

import { localFavorites } from 'utils';
import { Layout } from 'components/layouts'
import {  FavoritesList, NoFavorites } from 'components/ui';
import { SmallPokemon } from 'interfaces';

const Favorites: NextPage = () => {
  const [favorites, setFavorites] = useState<SmallPokemon[]>([]);

  useEffect(() => { 
    setFavorites(localFavorites.getPokemons())
  }, []);

  return (
    <Layout title='Listado de favoritos'>
      {favorites.length > 0 ? (
        <FavoritesList favorites={favorites} />
      ) : (<NoFavorites />)}
      
    </Layout>
  )
}

export default Favorites;