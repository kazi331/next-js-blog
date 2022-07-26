import Link from 'next/link';
const ArticleList = ({ article }) => {
    const { body, title, id } = article;
    return (
        <div className="p-4 w-full xl:w-1/3 lg:w-1/3 sm:w-1/2 " key={id}>
            <Link href="/article/[id]" as={`/article/${id}`}>
                <a className='inline-block p-4 bg-[#232636] rounded-lg  outline outline-transparent outline-1 hover:outline-sky-500'>
                    <h2 className='hover:text-sky-500 capitalize font-medium text-xl'>{title} &rarr; </h2>
                    <p className='mt-2'>{body}</p>
                </a>
            </Link>
        </div>
    );
};

export default ArticleList;