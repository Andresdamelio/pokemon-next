const togleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if(favorites.includes(id)) {
    favorites = favorites.filter(pokemonId => pokemonId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

const pokemonIsFavorite = (id: number): boolean => {
  if (typeof window !== 'undefined') {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
  }

  return false
} 

const getPokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

const exportObject = { togleFavorite, pokemonIsFavorite, getPokemons }

export default exportObject;