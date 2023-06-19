
import { Category } from '@/src/interfaces/category'
import { Page } from '@/src/interfaces/page'
import Link from 'next/link'
import moment from 'moment';
import { Article } from '../interfaces/article';

interface Props {
  page: Page | Category
  articles: Article[]
}




export default function ListArticles1({ page, articles }: Props) {
  const { data: { name, description } } = page
  // console.log('articles', articles?.map(data => data.data.updateDate.createdAt))
  return (

    <div className="py-12">
      <div className="container m-auto px-6  md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold  md:text-4xl ">{name}</h2>
          <p className="lg:mx-auto lg:w-6/12">
            {description}
          </p>
        </div>

        <div className="lg:w-3/4 xl:w-2/4 lg:mx-auto space-y-4 ">
          {articles?.map((article, i) => (
            <div key={i} className="group relative -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-xl  border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-skin-accent/5 shadow-2xl shadow-transparent hover:shadow-gray-600/20 sm:gap-8 sm:flex transition duration-300 hover:z-10">
              <div className="sm:w-2/6 rounded-xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
                <img
                  src={article.data.thumbnailUrl || "https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"}
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-56 sm:h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="sm:p-2 sm:pl-0 sm:w-4/6">
                <span className="mt-4 mb-2 inline-block font-medium  sm:mt-0">{moment(article.data.updateDate?.createdAt).locale('es').format('dddd, DD [de] MMMM')}</span>
                {/* <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">{format(new Date(article.data.updateDate?.createdAt), 'EEEE, d \'de\' MMMM \'de\' yyyy', { locale: es })}</span> */}
                <br />
                <Link href={`/article/content/${article?._id}/${article?.slug}`} className="text-2xl font-semibold ">
                  {article.data.name}
                </Link>
                <p className="my-6 ">
                  {article.data.description}
                </p>

                {/* <div className="flex gap-4">
                <a href="#" className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300">
                  Tailwindcss
                </a>
                <a href="#" className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300">
                  VueJS
                </a>
              </div> */}
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>

  )
}
