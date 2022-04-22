import Image from 'next/image'
import Link from 'next/link'


export default function NewsDisplay({article}) {
  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
  {!!article.urlToImage && <img src={article.urlToImage}/> } 
    <div className='flex justify-between items-center'>
        <span className='font-bold text-gray-600'>{}</span>

    </div>

    <div className='mt-2'>
    <h1 onClick={() => window.location.href = article.url}>
            <a className='text-2xl text-gray-700 font-bold hover:underline'>
                {article.title}
            </a>
        </h1>
      

    </div>
    <div className='flex justify-between items-center mt-6'>
       <p>
            {article.description}
        </p>

    </div>
    <div className='flex  justify-end items-center'>
    
     <h1>{article.author}</h1>


    </div>
    </div>
  )
}
