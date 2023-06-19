// export const dynamic = 'error';

import ListArticles1 from '@/src/components/ListArticles1'
import ListCategories from '@/src/components/ListCategories'
import { getArticlesByParentId } from '@/src/lib/articles'
import { getCategoriesByParentId } from '@/src/lib/categories'
import { getPageBySlug } from '@/src/lib/pages'
import React from 'react'
interface Props {
  params: {
    page: string
  }
}

export default async function Index(props: Props) {
  const page = await getPageBySlug(props.params.page)
  const categories = await getCategoriesByParentId( '0', page._id)
  const articles = await getArticlesByParentId(page._id)
  
  return (
    <React.Fragment>
      {
        page.data?.type === 'category' && <ListCategories page={page} categories={categories} />
      } 
      {
        page.data?.type === 'blog' && <ListArticles1 page={page} articles={articles}/>
      }
    </React.Fragment>
  )
}
