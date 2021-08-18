import PostItem from "./PostItem"


const PostList = ({posts}) => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 m-5 mb-10">
            {posts.map(post => (<PostItem post={post}/>))}
        </div>
    )
}

export default PostList
