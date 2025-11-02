import styles from "../Contents/Content.module.css"
import fiveStarsIcon from "../../../assets/five-stars.png"

function Avaliations() {
    return (
        <div className={styles['avaliations-container']}>
            <h2>Avaliações</h2>
            <p>⭐ Veja o que nossos clientes dizem sobre o cuidado dos pés ⭐</p>
            <div className={styles["cards-container"]}>
                <div className={styles["card"]}>
                    <img src={fiveStarsIcon} alt="" className={styles['five-stars-icon']} />
                    <span>"Gostei muito! Ótimo espaço, bom atendimento. Recomendo ✨"
                    </span>
                    <div className={styles["person"]}>
                        <img src=" " alt="" />
                        <div className={styles["name"]}>Felipe Eduardo</div>
                    </div>
                </div>
                <div className={styles["card"]}>
                    <img src={fiveStarsIcon} alt="" className={styles['five-stars-icon']} />
                    <span>"Ótimo serviço, boa recepção, são super atenciosos, só tenho a agradecer 🙏🏻"
                    </span>
                    <div className={styles["person"]}>
                        <img src="" alt="" />
                        <div className={styles["name"]}>Deise Matos</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avaliations