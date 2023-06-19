export const revalidate = 10


import { Post } from '@/src/components/Post'
import { Article } from '@/src/interfaces/article'
import { getArticleById } from '@/src/lib/articles'

import { getSiteById } from '@/src/lib/sites'
import { Fragment } from 'react'


interface Props {
  params: {
    page: string
    id: string
    slug: string
  }
}
// export async function generateMetadata(props: Props) {
//   const seo = await getArticleSeoBySlug(props.params.slug)
//   // const page = await getPageSeoBySlug(type, props.params.page) as Page
//   // const site = await getSiteById()

//   return {
//     title: seo?.data.name,
//     description: seo?.data.description,
//     url: process.env.NEXT_PUBLIC_SITE_URL,
//     icons: {
//       icon: seo.site?.data.info.icon,
//       shortcut: seo.site?.data.info.icon,
//       apple: seo.site?.data.info.icon,
//       other: {
//         rel: 'apple-touch-icon-precomposed',
//         url: seo.site?.data.info.icon,
//       },
//     },
//     openGraph: {
//       title: seo?.data.name,
//       description: seo?.data.description,
//       url: process.env.NEXT_PUBLIC_SITE_URL,
//       siteName: seo.site.data.info.title,
//       images: [
//         {
//           url: seo?.data.thumbnailUrl || 'https://blog.fmb.mx/hubfs/blog/blog-frecuencia.jpg',
//           width: 800,
//           height: 600,
//         },
//         {
//           url: seo?.data.thumbnailUrl || 'https://blog.fmb.mx/hubfs/blog/blog-frecuencia.jpg',
//           width: 1800,
//           height: 1600,
//           alt: seo?.data.description,
//         },
//       ],
//       type: 'website',
//     },
//     robots: {
//       index: true,
//     }
//   };
// }


// export async function generateStaticParams() {
//   const articles = await getArticlesBySiteId() as Article[]
  
//   return articles.map((article) => ({
//     page: 'blog',
//     id: article._id,
//     slug: article.slug,
//   }));
// }

export default async function Index(props: Props) {
  const article = await getArticleById( props.params.id)
  // console.log('article', article)
  return (
    <Fragment>
      <Post post={article} />
      {/* <Post1 post={article} /> */}
    </Fragment>
  )
}
