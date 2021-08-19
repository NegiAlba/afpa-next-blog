import { fetchAPI } from "@lib/api"
import Seo from '@components/Seo'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown';
import Link from "next/link";

const Post = ({post}) => {
    return (
        <>
            <Seo
                title={`AFPA - ${post.Title}`}
                keywords={post.Title}
                description={post.Content}
            />
            
            {/* <div className="relative bg-purple-300 h-48">
                <div className="max-w-7xl mx-auto my-auto">
                    <div className="relative z-10 md:pb-20 bg-white lg:max-w-2xl lg:full lg:pb-28">
                        <svg className="md:block absolute right-0 inset-y-0 h-full w-48 text-white transform">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>
                    </div>
                </div>
            </div> */}
            

            
            <section className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 md:text-6xl">
                        {post.Title}
                    </h1>
                </div>
            </section>
            <div className="bg-grey-light p-3 rounded w-full m-4 lg:text-right sm:text-center ">
                <span className="mx-2">{post.User.username}</span>
                <span className="mx-2"> published on 
                    <Moment format="Do MMM YYYY">{post.published_at}</Moment>
                </span>
            </div>
            <section className="container">
                <ReactMarkdown children={post.Content}/>
            </section>

            <div className="container mx-auto rounded-lg text-center my-8">
                <Link href="/">
                    <button className="py-3 px-6 text-white rounded-lg bg-purple-600 shadow-lg block md:inline-block"> Back to homepage </button>
                </Link>
            </div>
        </>
    )
}

export default Post

export async function getStaticPaths(){
    const posts = await fetchAPI(`/posts`);

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.Slug
            }
        })),
        fallback: false,
    };
}

export async function getStaticProps(context){
    const post = await fetchAPI(`/posts?Slug=${context.params.slug}`);

    return {
        props:{
            post: post[0]
        },
        revalidate: 1,
    };
}
