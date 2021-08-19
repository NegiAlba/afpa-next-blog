import Link from "next/link"

const PostItem = ({post}) => {
    return (
        <Link href="/posts/[slug]" as={`/posts/${post.Slug}`} >
            <a className="overflow-hidden h-24 hover:bg-gray-200 border border-gray-700 p-3 md:mx-3 sm:my-3">
                <h3 className="font-bold text-lg h-2 mb-8"> {post.Title} &rarr;</h3>
            </a>
        </Link>
    )
}

export default PostItem
