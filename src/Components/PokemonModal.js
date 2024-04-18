import styles from "./PokemonModal.module.css";
import stylesCard from "./PokemonCard.module.css";

function PokemonModal(props){
    
    const { pokemon , onClose} = props;
    const {height , weight , stats = [] , id , name , type , image} = pokemon;

    return (
        <div className={`${styles["popup"]} ${stylesCard[type]}`}>

            <div className={styles["closebutton"]}
                 onClick={ () => {
                    onClose();
                 }}
            >
                X
            </div>

            {/* Modal Left Container */}

            <div className={styles["left-container"]}>
                <img className={styles["leftcontainer-img"]} src={image} alt={name} />
                <h4 className={styles["nametext"]}>{name}</h4>
            </div>

            {/* Modal Right Container */}

            <div className={`${styles["right-container"]} ${stylesCard[type]}`}>
                <div>
                    <p>
                        <span>Weight:</span> {weight}
                    </p>
                    <p>
                        <span>Height:</span> {height}
                    </p>
                </div>

                <div>
                    {Array.from(stats).map((statObj, index) => {
                        const {stat} = statObj;
                        const name = stat.name;

                        return(
                            <p>
                                <span>Stat{index + 1}:</span> {name}
                            </p>
                        )
                    })}
                </div>
                
                <div>
                    {Array.from(stats).map((statObj, index) => {
                        const {base_stat} = statObj;

                        return(
                            <p>
                                <span>Bs{index + 1}:</span> {base_stat}
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PokemonModal;