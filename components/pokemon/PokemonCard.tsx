import { useRouter } from 'next/router';
import { Card, Grid, Row, Text} from '@nextui-org/react';

import { SmallPokemon } from "interfaces"

interface Props {
  pokemon: SmallPokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();
  const { id, img, name } = pokemon;

  const goToPokemon = () => {
    router.push(`/pokemon/${id}`);
  }

  return (
    <Grid xs={6} sm={3} md={3} xl={1} key={id}>
      <Card hoverable clickable onClick={goToPokemon}>
        <Card.Body css={{ p: 2}}>
          <Card.Image src={img} width="100%" height={130} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{ name }</Text>
            <Text>#{ id }</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default PokemonCard