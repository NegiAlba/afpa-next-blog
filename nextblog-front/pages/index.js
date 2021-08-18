import PostList from '../components/PostList'
import { fetchAPI } from '../lib/api'

export default function Home({posts}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <PostList posts={posts}/>
            </main>
        </div>
    );
}

export async function getStaticProps(){
    const posts = await fetchAPI("/posts");

    return {
        props: {
            posts
        },
        revalidate: 1,
    }
}
