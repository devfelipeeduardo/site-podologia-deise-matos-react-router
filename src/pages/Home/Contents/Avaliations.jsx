import styles from "../Contents/Content.module.css"
import fiveStarsIcon from "../../../assets/five-stars.png"

function Avaliations() {
    return (
        <div className={styles['avaliations-container']}>
            <h2>Avaliações</h2>
            <p>⭐ Mais de 400 avaliações <a href="https://share.google/0FPzxIe6Zmg0d8rew" target="_blank"> 5 Estrelas no Google!</a> ⭐</p>
            <div className={styles["cards-container"]}>
                <div className={styles["card"]}>
                    <img src={fiveStarsIcon} alt="" className={styles['five-stars-icon']} />
                    <span>Excelente atendimento! A Deise é maravilhosa, muito atenciosa e cuidadosa. Equipe nota 10! Recomendo muito!
                    </span>
                    <div className={styles["person"]}>
                        <div className={styles["name"]}>Fernanda A.</div>
                    </div>
                </div>
                <div className={styles["card"]}>
                    <img src={fiveStarsIcon} alt="" className={styles['five-stars-icon']} />
                    <span>Atendimento de primeira, local confortável, profissionais educadas e prestativas!
                    </span>
                    <div className={styles["person"]}>
                        <div className={styles["name"]}>Janaina E.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avaliations