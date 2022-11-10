import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div style={{ flex: 1 }}>
                <img src="images/Logo.png" />
                <div className={styles.text}>Unique NFTs Marketplace. rare and authentic <br />digital creation</div>
                <div className={styles.social}>
                    <img src="images/fb.svg" />
                    <img src="images/discord.svg" />
                    <img src="images/instagram.svg" />
                    <img src="images/yt.svg" />
                </div>
            </div>
            <div className={styles.actionColumn}>
                <div className={styles.action}>Marketplace</div>
                <div className={styles.action}>Explore</div>
                <div className={styles.action}>Stats</div>
                <div className={styles.action}>Create</div>
            </div>
            <div className={styles.actionColumn}>
                <div className={styles.action}>Resources</div>
                <div className={styles.action}>Blogs</div>
                <div className={styles.action}>Help Center</div>
                <div className={styles.action}>Partners</div>
            </div>
            <div className={styles.actionColumn}>
                <div className={styles.action}>About Us</div>
                <div className={styles.action}>Career</div>
                <div className={styles.action}>Support</div>
            </div>
        </div>
    )
}

export default Footer