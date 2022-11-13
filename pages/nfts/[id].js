import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/NFTPage.module.css'

const NFTPage = () => {
    const router = useRouter()
    const { id } = router.query

    const [offer, setOffer] = useState(3.48)
    const address = 'Daq'

    return (
        <div className={styles.container}>
            <video className={styles.video} src="http://localhost:3000/videos/demo.mp4" autoplay="true"
                muted="muted" loop />
            <div>
                <div className={styles.title}>Rappu Apes</div>
                <div className={styles.creator}>Created by Daq</div>
                <p className={styles.description}>
                    Rappu Apes is a collection of 10,000 unique NFTs on the Ethereum blockchain. Each Rappu Ape is randomly generated and stored on the blockchain as an NFT.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl nunc vel nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam lorem, nec ultricies nisl nunc vel nisl.
                </p>
                <div className={styles.offer}>Latest Offer: 3.48 ETH </div>
                <div className={styles.offer}>Highest Bidder: Daq</div>
                {address == 'Daq' ? <div className={styles.bidplace}>
                    <input type={'number'} className={styles.amount} min={3.48} value={offer} onChange={(e) => {
                        setOffer(e.currentTarget.value)
                    }} />
                    <div className={styles.button}>Make an Offer</div>
                </div> : <div className={styles.bidplace}>
                    <div className={styles.button}>Cancel Offer</div>
                </div>}
            </div>
        </div>
    )
}

export default NFTPage