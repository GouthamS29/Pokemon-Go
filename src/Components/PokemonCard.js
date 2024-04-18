import { useState } from "react";
import styles from "./PokemonCard.module.css";
import PokemonModal from "../Components/PokemonModal";
import BackDrop from "./BackDrop";


function PokemonCard(props){

    const { pokemon } = props;

    const {id, name, image, type} = pokemon;

    const[modal , setModal] = useState(false);

    return(
        <>
            <div className={`${styles["card-container"]} ${styles[type]}`}>
                <div className={styles["number"]}>#{id}</div>
                <img className={styles["image"]} src={image} alt={name} />
                <div className="details">
                    <h3 className={styles["name"]}>{name}</h3>
                    <p>Type: {type}</p>
                </div>

                <button onClick={() => {
                    setModal((clicked) => !clicked);
                }}
                className={`${styles["Knowmore"]} ${styles[type]}`}
                >
                    Know More...
                </button>
            </div>

            {modal && (
                <BackDrop onClose={() => setModal(false)}>
                    {" "}
                    <PokemonModal onClose={() => setModal(false)} pokemon={pokemon}
                    />{" "}
                </BackDrop>
            )}

        </>
    );
}

export default PokemonCard;