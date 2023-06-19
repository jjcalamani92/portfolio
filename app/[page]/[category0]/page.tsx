import ListArticles1 from '@/src/components/ListArticles1'
import ListCategories from '@/src/components/ListCategories'
import { getArticlesByParentId } from '@/src/lib/articles'
import { getCategoriesByParentId, getCategoryByPaths } from '@/src/lib/categories'
import { getPageBySlug } from '@/src/lib/pages'
import React from 'react'
interface Props {
  params: {
    page: string
    category0: string
  }
}
const i = '0'

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
