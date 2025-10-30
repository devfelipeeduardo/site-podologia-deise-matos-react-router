import correctIcon from "../../../../assets/correct.png"

import styles from "../Contents/Content.module.css"

function Services() {
    return (
        <div className={styles["services-container"]}>
            <h3>SERVIÇOS</h3>
            <h2>Como podemos ajudá-lo a resolver seu incômodo nos pés?</h2>
            <div className={styles['solutions-cards']}>
                <div class={styles['card']}>
                    <img class={styles['emoji']} alt="OK IMAGE" src={correctIcon} />
                    <h4 class={styles['title']}>Pés Diabéticos</h4>
                    <p class={styles['description']}>Cuidados especiais para prevenir feridas e infecções em pés sensíveis.</p>
                </div>
                <div class={styles['card']}>
                    <img class={styles['emoji']} alt="OK IMAGE" src={correctIcon} />
                    <h4 class={styles['title']}>Podologia Preventiva</h4>
                    <p class={styles['description']}>Avaliação e manutenção regular para evitar problemas futuros nos pés.</p>
                </div>
                <div class={styles['card']}>
                    <img class={styles['emoji']} alt="OK IMAGE" src={correctIcon} />
                    <h4 class={styles['title']}>Unha Encravada</h4>
                    <p class={styles['description']}>Tratamento para aliviar dor e inflamação, restaurando o formato natural da unha.</p>
                </div>
                <div class={styles['card']}>
                    <img class={styles['emoji']} alt="OK IMAGE" src={correctIcon} />
                    <h4 class={styles['title']}>Onicomicose</h4>
                    <p class={styles['description']}>Tratamento eficaz contra fungos que deixam as unhas amareladas e espessas.</p>
                </div>
                <div class={styles['card']}>
                    <img class={styles['emoji']} alt="OK IMAGE" src={correctIcon} />
                    <h4 class={styles['title']}>Micose de Unha</h4>
                    <p class={styles['description']}>Eliminação segura de fungos, devolvendo a aparência saudável às unhas.</p>
                </div><div class={styles['card']}>
                    <img class={styles['emoji']} alt="OK IMAGE" src={correctIcon} />
                    <h4 class={styles['title']}>Onicogrifose</h4>
                    <p class={styles['description']}>Correção de unhas grossas e deformadas para melhorar conforto e estética.</p>
                </div>
            </div>
        </div>
    )
}

export default Services