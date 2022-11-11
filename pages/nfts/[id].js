import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import styles from '../../styles/NFTPage.module.css'

const NFTPage = () => {
    const router = useRouter()
    const { id } = router.query
    
    return (
        <div className={styles.container}>
            <video className={styles.video} src="http://localhost:3000/videos/demo.mp4" autoplay="true"
                muted="muted" />
            <div>
                <div className={styles.title}>Rappu Apes</div>
                <div className={styles.creator}>Created by Daq</div>
                <div className={styles.offer}>Latest Offer</div>
                <div className={styles.offer}>3.48 ETH</div>
                
            </div>
        </div>
    )
}

export default NFTPage