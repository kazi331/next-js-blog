import { useRouter } from 'next/router';
import Head from 'next/head'
const article = ({ article }) => {
    console.log(article)
    const router = useRouter();
    // console.log(router)
    const { id } = router.query;
    console.log(id)
    return (
        <>
            <Head>
                <title>{article.title}</title>
            </Head>
            <article className='w-full max-w-xl'>
                <h1 className='capitalize font-medium text-2xl mt-6'>{article.title}</h1>
                <p className='my-4'>{article.body}</p>
            </article>
        </>
    );
};

export default article;

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json();
    return {
        props: { article }
    }
}