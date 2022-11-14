import Link from 'next/link'
import React from 'react'
import { global } from 'styled-jsx/css'
import styles from '../styles/Card.module.css'

const Card = ({ id }) => {
    return (
        <Link href={'/nfts/' + id}>
            <div className={styles.container}>
                <img src={'https://bafkreifiymh7pl26kanucedwe4fpvp5q4yb77iygtxxwrkmmvppcx5tkwe.ipfs.nftstorage.link/'} className={styles.image} />
                <div className={styles.details}>
                    <div>
                        <div className={styles.title}>Rappu Apes</div>
                        <div className={styles.creator}>Created by Daq</div>
                        <div className={styles.offer}>Latest Offer</div>
                        <div className={styles.offer}>3.48 ETH</div>
                    </div>
                    <div className={styles.right}>
                        <img className={styles.owner} src='images/image.png' />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card