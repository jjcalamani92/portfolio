import ListArticles1 from '@/src/components/ListArticles1'
import ListCategories from '@/src/components/ListCategories'
import { getArticlesByParentId } from '@/src/lib/articles'
import { getCategoriesByParentId, getCategoriesBySiteId, getCategoryByPaths, getCategoryByPathsSeo } from '@/src/lib/categories'
import React from 'react'
interface Props {
  params: {
    page: string
    category0: string
  }
}
const i = '0'

export async function generateMetadata(props: Props) {
  const seo = await getCategoryByPathsSeo(i,props.params)
  return {
    title: seo?.data.name,
    description: seo?.data.description,
    
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
    },
    
  };
}

export async function generateStaticParams() {
  const categories = await getCategoriesBySiteId(i)

  return categories.map((category) => ({
    page: category.data.params.path[0],
    category0: category.data.params.path[1],
    
  }));
}


export default async function Index(props: Props) {
  const category = await getCategoryByPaths(i, props.params)
  const articles = await getArticlesByParentId(category._id)
  
  const categories = await getCategoriesByParentId( `${+i+1}`, category._id)
  
  return (
    <React.Fragment>
      {
        category.data?.type === 'category' && <ListCategories page={category} categories={categories} />
      } 
      {
        category.data?.type === 'blog' && <ListArticles1 page={category} articles={articles}/>
      } 
    </React.Fragment>
  )
}
