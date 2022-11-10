import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import Card from '../components/card';
import TabButton from '../components/tab_button'
import styles from '../styles/Home.module.css'

export default function Home() {
  const tabs = [
    'Music',
    'Art',
    'Sport',
    'Photography',
    'VR',
    'Videos',
    'More',
  ];

  const [activeTab, setActiveTab] = React.useState(0);



  return (
    <div>
      <div className={styles.about}>
        <div className={styles.about_text}>
          <div className={styles.about_title}>Collect Super Unique Digital Artworks </div>
          <div className={styles.about_description}>QikNFT is the world’s largest NFT marketplace with over 45 thousand aritist.</div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.stat_title}>95k +</div>
              <div className={styles.stat_description}>Artwork</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.stat_title}>45k +</div>
              <div className={styles.stat_description}>Artist</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.stat_title}>60k +</div>
              <div className={styles.stat_description}>Auction</div>
            </div>
          </div>
        </div>
        <img src="images/homepage.png" />
      </div>
      <div className={styles.Explore} id={'Explore'} style={{ scrollMarginTop: '200px' }}>
        <div className={styles.title}>NFT Marketplace</div>
        <div className={styles.subtitle}>Spotlight: Projects You Would Love</div>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => {
            return <TabButton name={tab} key={index} active={activeTab == index} onClick={() => {
              setActiveTab(index);
            }} />
          })}
        </div>
        <div className={styles.grid}>
          {Array(6).fill(0).map((_, index) => {
            return <Card key={index} />
          })}
        </div>
      </div>
      <div id={'Resources'} style={{ scrollMarginTop: '200px' }}>
        <div className={styles.title}>Be An NFT Creator</div>
        <div className={styles.subtitle}>Create & Sell Your Own NFTs</div>
        <div className={styles.workflow}>
          <div className={styles.card}>
            <img src={'images/create.svg'} />
            <div className={styles['card-title']}>Create Artworks</div>
            <div className={styles['card-subtitle']}>Create your collection and social links and more</div>
          </div>
          <div className={styles.card}>
            <img src={'images/upload.svg'} />
            <div className={styles['card-title']}>Upload</div>
            <div className={styles['card-subtitle']}>Create your collection and social links and more</div>
          </div>
          <div className={styles.card}>
            <img src={'images/listing.svg'} />
            <div className={styles['card-title']}>Listing</div>
            <div className={styles['card-subtitle']}>Setup and choose between auction fixed price listing or declining listing</div>
          </div>
        </div>
        <div className={styles.action}>
          <div className={styles.button}>Create Now</div>
          <div className={`${styles.button} ${styles.outlined}`}>Watch Videos</div>
        </div>
      </div>

      <div className={styles.card} style={{ marginBottom: '40px' }}>
        <div className={styles['card-title']} style={{ fontSize: '33px' }}>Join Our Community</div>
        <div className={styles['card-subtitle']} style={{ marginBottom: '50px' }}>Meet the team, artist and collectors of platform update,annoucement and more</div>
        <div className={styles.button}>Take Me to Discord</div>
      </div>
    </div>
  )
}
