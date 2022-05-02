import { Grid, Card, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { SmallPokemon } from 'interfaces';

interface Props {
  pokemon: SmallPokemon
}

const CardFavoritePokemon = ({ pokemon }: Props) => {
  const router = useRouter();
  return (
    <Grid xs={6} sm={3} md={3} xl={2} onClick={() => router.push(`/pokemon/${pokemon.name}`)}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width='100%' height={140} />
        <Text color='white' css={{ textAlign: 'center'}} h3>{ pokemon.name}</Text>
        </Card>
    </Grid>
    
  )
}

export default CardFavoritePokemon