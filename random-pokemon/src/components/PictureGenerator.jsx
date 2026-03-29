function PictureGenerator({ handleSubmit, pokemon, handleBan }) {

    return (
        <div className="pic-generator">
            <h1>Pokemon Generator</h1>
            <p>Click the button to start discovering pokemon!</p>

            {pokemon.name && (
                <div className="pokemon-container">
                    <h2>{pokemon.name}</h2>

                    <div className="pokemon-attributes">
                        {pokemon.type.map((t, index) => (
                            <span 
                                key={index} 
                                onClick={() => handleBan(t)}
                                style={{ cursor: "pointer" }}
                            >
                                {t}
                            </span>
                        ))}

                        {pokemon.abilities.map((a, index) => (
                            <span 
                                key={index} 
                                onClick={() => handleBan(a)}
                                style={{ cursor: "pointer" }}
                            >
                                {a}
                            </span>
                        ))}
                    </div>

                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
            )}

            <button onClick={handleSubmit}>
                Discover pokemon!
            </button>
        </div>
    );
}

export default PictureGenerator;