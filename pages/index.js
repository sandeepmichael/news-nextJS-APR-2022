import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/about.module.css'


export default function Home() {
  return (
    <Layout>
      <div className={styles.main}>
        <h1 className='font-bold mt-6 text-5xl'>News App</h1>
        <span className='text-2xl mt-10'>Check Out the Latest Articles In News Feed..</span>
      </div>

    </Layout>
  )
}
