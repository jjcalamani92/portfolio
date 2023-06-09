import React from 'react'
import ListArticles1 from '@/src/components/ListArticles1'
import ListCategories from '@/src/components/ListCategories'
import { getArticlesByParentId } from '@/src/lib/articles'
import { getCategoriesByParentId, getCategoryByPaths } from '@/src/lib/categories'
interface Props {
  params: {
    page: string
    category0: string
    category1: string
    category2: string
  }
}
const i = '2'

export default async function Index(props: Props) {
  const category = await getCategoryByPaths(i, props.params)
  // console.log('category', category)
  const articles = await getArticlesByParentId(category._id)
  // console.log('articles', articles)
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
