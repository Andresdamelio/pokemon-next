import { Grid } from '@nextui-org/react';

import CardFavoritePokemon from './CardFavoritePokemon';
import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
  favorites: SmallPokemon[]
}

const Favorites = ({ favorites }: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favorites.map((pokemon, index) => (
        <CardFavoritePokemon key={index} pokemon={pokemon}/>
      ))}
    </Grid.Container>
  )
}

export default Favorites;