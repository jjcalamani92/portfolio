export const revalidate = 10


import { Post } from '@/src/components/Post'
import { Article } from '@/src/interfaces/article'
import { getArticleById, getArticlesBySiteId } from '@/src/lib/articles'
import rehypeHighlight from "rehype-highlight"
import { getSiteById } from '@/src/lib/sites'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Fragment } from 'react'
import { serialize } from 'next-mdx-remote/serialize'

interface Props {
  params: {
    id: string
    slug: string
  }
}
export async function generateMetadata(props: Props) {
  const seo = await getArticleById(props.params.id)
  // const page = await getPageSeoBySlug(type, props.params.page) as Page
  // const site = await getSiteById()

  return {
    title: seo?.data.name,
    description: seo?.data.description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    
    openGraph: {
      title: seo?.data.name,
      description: seo?.data.description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
     
      images: [
        {
          url: seo?.data.thumbnailUrl || 'https://blog.fmb.mx/hubfs/blog/blog-frecuencia.jpg',
          width: 800,
          height: 600,
        },
        {
          url: seo?.data.thumbnailUrl || 'https://blog.fmb.mx/hubfs/blog/blog-frecuencia.jpg',
          width: 1800,
          height: 1600,
          alt: seo?.data.description,
        },
      ],
      type: 'website',
    },
    robots: {
      index: true,
    }
  };
}


// export async function generateStaticParams() {
//   const articles = await getArticlesBySiteId()

//   return articles.map((article) => ({
//     id: article._id,
//     slug: article.slug,
//   }));
// }

const data = `

`

export default async function Index(props: Props) {
  const article = await getArticleById(props.params.id)
  
  const source = article.data.content
  // const mdxSource = await serialize(source, {
  //   mdxOptions: { rehypePlugins: [rehypeHighlight] },
  // })
  
  return (
    <Fragment>
       {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link>
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-10">
        <div className="w-full mx-auto space-y-8 text-center">
          
          <h1 className="text-4xl font-bold leading-tight md:text-5xl text-skin-accent">
            {article.data?.name}
          </h1>
        </div>
        <div className='prose'>

          <MDXRemote
            
            source={source}
          />
        </div>
      </article> */}


      <Post post={article} />
    </Fragment>
  )
}
