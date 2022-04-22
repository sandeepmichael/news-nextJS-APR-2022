import Layout from "../components/layout"
import Image from 'next/image'
import styles from '../styles/about.module.css'

export default function AboutPage() {
  //<h1 className="text-8xl border-b-4 pb-5 font-bold-100 ml-5">About</h1>
  return (
    <Layout title='About Me'>
        
        <div className={styles.main}>
    
        <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="sandeep"
    className="borderCircle"
  />
          
            <p className={styles.para}>
                <span className="font-bold">Hello I'm Sandeep.I'm  a full stack developer..</span>
            </p>

        </div>
    </Layout>
  )

}
