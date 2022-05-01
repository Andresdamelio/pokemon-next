import React from 'react'
import { Container, Text, Image } from '@nextui-org/react';

const NoFavorites = () => {
  return (
    <Container css={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
        <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt='Image pokemon' height={250} width={250} css={{ opacity: '0.3'}}/>
        <Text h1>No hay favoritos</Text>
      </Container>
  )
}

export default NoFavorites