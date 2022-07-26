import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex flex-wrap my-10">
          {
            articles?.map(article => <ArticleList article={article} key={article.id} />)
          }
        </div>
      </div>
    </div>
  )
}


/* 
3 ways to fetch data 
1. getStaticProps
2. getStaticPaths(Dynamically generate paths)
3. getServerSideProps(little slower)
*/

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  const articles = await res.json();

  return {
    props: { articles }
  }
}