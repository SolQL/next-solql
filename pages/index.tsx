import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({data}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {data}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const hre: HardhatRuntimeEnvironment = require("hardhat");
  const bytecode = hre.artifacts.readArtifactSync("Query").bytecode;
  
  return {
    props: {
      data: bytecode
    }
  }
}

export default Home
