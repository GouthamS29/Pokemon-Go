import { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import PokemonCard from "../Components/PokemonCard";



function MainPage() {

    const[isLoading, setLoading] = useState(false);
    const[pokemonData, setPokemonData] = useState([]);

    const url = "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1";

        const[nextURL , setNextURL] = useState(url); // To assign a new URL to fetch method on calling more Pokemons

        async function fetchPokemonData() {
            setLoading(true);
            const response = await fetch(nextURL);
            let data = await response.json();
            data = data[0];

            console.log(data);

            setNextURL(data.next);

            const { results = [], next, count} = data;

            const pokemonList = [];

            for(let i=0; i<results.length;i++)
            {
                const pokemonObj = results[i];
                const {url : pokemonDetailURL , name} = pokemonObj;

                const response = await fetch(pokemonDetailURL);
                let pokemonDetailData = await response.json();
                pokemonDetailData = pokemonDetailData[0];

                pokemonList.push(pokemonDetailData);
            }
            setPokemonData((oldData) => [...oldData, ...pokemonList]);

            setLoading(false);            
        }


    useEffect ( () => {
        fetchPokemonData();
    }, []);

    return (
        <>
            {isLoading ? (<h1>Loading...</h1>) 
            : (
                <>
                    <section className={styles["heading"]}>
                        <div className={styles["content-1"]}>
                            <h2>Pokemon</h2>
                            <h2>Pokemon</h2>
                        </div>
                        <div className={styles["content-2"]}>
                            <h2>Kingdom</h2>
                            <h2>Kingdom</h2>
                        </div>
                    </section>
                    <section className={styles["app-container"]}>
                        <div className={styles["pokemon-container"]}>
                            {pokemonData.map((pokemon) => {
                                const {id} = pokemon;

                                return (
                                    <div key={id}>
                                        <PokemonCard pokemon={pokemon} />
                                    </div>
                                )
                            } )}
                        </div>
                        <button onClick={() => {
                            fetchPokemonData();
                        }}
                        className={styles["Loadmore"]}
                        >
                            Load more
                        </button>
                    </section>
                </>
            )}
        </>
    )
}

export default MainPage;