import Layout from "../../components/layout"
import NewsDisplay from '../../components/NewsDisplay'
import styles from '../../styles/pagination.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'


export default function FeedPage({articles, pageNumber}) {
 
    const router = useRouter()
  return (
    <Layout>
        <>
    <h1 className="text-5xl border-b-4 p-5 font bold">Articles</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((article, index) => <NewsDisplay key={index} article={article}/>)}
         
    </div>
    <div className={styles.paginator}>
       <div 
       onClick={() => {
           if(pageNumber >  1) {
               router.push(`/feed/${pageNumber-1}`).then(() => window.scrollTo(0,0))
           }
       }} className={pageNumber === 1 ? styles.disabled : styles.active}>prev</div>

       <div>#{pageNumber}</div>

       <div 
       onClick={() => {
           if(pageNumber <  6) {
               router.push(`/feed/${pageNumber+1}`).then(() => window.scrollTo(0,0))
           }
       }} className={pageNumber === 6 ? styles.disabled : styles.active} >Next</div>

    </div>
     
 
   </>
    </Layout>
  )
}



export const getServerSideProps = async PageContext => {
    const pageNumber = PageContext.query.id;
    if(!pageNumber || pageNumber < 1 || pageNumber > 6){
        return {
            props: {
                articles:[],
                pageNumber:1
            }
        }
    }

    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=6&page=${pageNumber}`,{
        headers : {
            Authorization : `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
        }
    })
    const {articles} = response.data;
    return {
        props: {
       articles,
            pageNumber: Number.parseInt(pageNumber)
        }
   }
     
}
 