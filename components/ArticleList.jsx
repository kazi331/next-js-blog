const ArticleList = ({article}) => {
    const {body, title, id} = article;
    return (
        <div className="p-4 w-full xl:w-1/3 lg:w-1/3 sm:w-1/2 " key={id}>
            <div className="p-4 bg-[#232636] rounded-lg">
                <h3 className='capitalize font-medium text-xl'>{title}</h3>
                <p className='mt-2'>{body}</p>
            </div>
        </div>
    );
};

export default ArticleList;