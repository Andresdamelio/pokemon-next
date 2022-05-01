import React from 'react'
import { Grid, Card } from '@nextui-org/react';

interface Props {
  id: number
}


const CardFavoritePokemon = ({ id }: Props ) => {
  return (
    <Grid xs={6} sm={3} md={3} xl={2}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width='100%' height={140}/>
      </Card>
    </Grid>
  )
}

export default CardFavoritePokemon