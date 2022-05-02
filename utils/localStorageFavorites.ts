import { SmallPokemon } from '../interfaces/pokemon-list';

const togleFavorite = (pokemon: SmallPokemon) => {
  let favorites: SmallPokemon[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  const poke = favorites.find(p => p.id === pokemon.id);

  if(poke) {
    favorites = favorites.filter(pokemonId => poke.id !== pokemon.id);
  } else {
    favorites.push(pokemon);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

const pokemonIsFavorite = (id: number): boolean => {
  if (typeof window !== 'undefined') {
    const favorites: SmallPokemon[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    const poke = favorites.find(p => p.id === id);

    return poke ? true : false;
  }

  return false
} 

const getPokemons = (): SmallPokemon[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

const exportObject = { togleFavorite, pokemonIsFavorite, getPokemons }

export default exportObject;