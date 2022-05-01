import { Grid } from '@nextui-org/react';

import CardFavoritePokemon from './CardFavoritePokemon';

interface Props {
  favorites: number[]
}

const Favorites = ({ favorites }: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favorites.map((id, index) => (
        <CardFavoritePokemon key={index} id={id}/>
      ))}
    </Grid.Container>
  )
}

export default Favorites;