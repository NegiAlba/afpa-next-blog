import Head from 'next/head'

const Seo = ({title, keywords, description}) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>{title}</title>
            <meta property="og:title" content={title} />

            <meta name="description" content={description} />
            <meta property="og:description" content={description} />

            <meta name="keywords" content={keywords} />
            <meta property="og:keywords" content={keywords} />

        </Head>
    )
}


Seo.defaultProps = {
    title: "AFPA - Next blog made with Strapi API",
    keywords: "nextjs, afpa, learning",
    description: "Learning new stuff everyday (or almost)"
}

export default Seo