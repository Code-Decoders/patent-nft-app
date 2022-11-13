import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/"><img src='http://localhost:3000/images/Logo.png' className={styles.logo} /></Link>
            <div className={styles.menu}>
                <div className={styles.menuitem} onClick={() => {
                    if (window.location.pathname === '/') {
                        document.getElementById('Explore').scrollIntoView();
                    } else {
                        window.location.href = '/#Explore';
                    }
                }}>Explore</div>
                <Link href={'/under'}><div className={styles.menuitem}>Stats</div></Link>
                <Link href={'/under'}><div className={styles.menuitem}>Resources</div></Link>
                <Link href={'/under'}><div className={styles.menuitem}>Artists</div></Link>
                <Link href={'/create'}><div className={styles.menuitem}>Create</div></Link>
            </div>
            <div className={styles.button}>
                Connect Wallet
            </div>
        </div>
    )
}

export default Navbar