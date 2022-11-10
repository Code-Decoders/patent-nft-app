import React from 'react'
import styles from '../styles/Card.module.css'

const Card = () => {
    return (
        <div className={styles.container}>
            <img src={'/images/Image.png'} className={styles.image} />
            <div className={styles.details}>
                <div>
                    <div className={styles.title}>Rappu Apes</div>
                    <div className={styles.creator}>Created by Daq</div>
                    <div className={styles.offer}>Latest Offer</div>
                    <div className={styles.offer}>3.48 ETH</div>
                </div>
                <div className={styles.right}>
                    <img className={styles.owner} src='images/image.png'/>
                </div>
            </div>
        </div>
    )
}

export default Card