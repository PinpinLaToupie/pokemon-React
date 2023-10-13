

function NavBar(props) {
    const { pokemonList, currentIndex, changePokemon } = props;
  
    return (
      <div className="navbar">
        {pokemonList.map((pokemon, index) => (
          <button
            key={index}
            onClick={() => changePokemon(index)}
            className={currentIndex === index ? 'active' : ''}
          >
            {pokemon.name}
          </button>
        ))}
      </div>
    );
  }

export default NavBar;