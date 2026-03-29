import BanList from "./components/BanList";
import PictureGenerator from "./components/PictureGenerator"
import { useState } from "react";
function App() {

  const [pokemon, setPokemon] = useState(
    {
      "name": null,
      "type": [],
      "picture": null,
      "abilities": []
    }
  )

  const [banList, setBanList] = useState([]);

  const handleBan = (attribute) => {
    setBanList(prev => [...prev, attribute])
  }

  const getPokemonIndex = () => {
    const totalPokemon = 1025;
    const randomPokemon = Math.floor(Math.random() * totalPokemon) + 1;
    return randomPokemon
  }

  const handleSubmit = async () => {
    let attempts = 0;
    const maxAttempts = 10;
    let valid = false;
    let data = null;

    while (!valid && attempts < maxAttempts) {
      const pokemonIndex = getPokemonIndex();

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
      data = await res.json();

      const types = data.types.map(t => t.type.name);
      const abilities = data.abilities.map(a => a.ability.name);

      const allAttributes = [...types, ...abilities];

      const hasBannedAttribute = allAttributes.some(attr =>
        banList.includes(attr)
      );

      if (!hasBannedAttribute) {
        valid = true;
      }

      attempts++;
    }

    if (!valid) {
      alert("No valid Pokémon found. Try removing some bans.");
      return;
    }

    // Safe to display
    setPokemon({
      name: data.name,
      type: data.types.map(t => t.type.name),
      picture: data.sprites.front_default,
      abilities: data.abilities.map(a => a.ability.name)
    });
  };

  return (
    <>
      <div className="main-content">
          <PictureGenerator handleSubmit={handleSubmit} pokemon={pokemon} handleBan={handleBan} />
          <BanList bannedItems={banList} />
      </div>
    </>
  )
}

export default App
