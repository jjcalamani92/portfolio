'use client'
import { usePathname } from "next/navigation"
import { Category } from "../interfaces/category"
import { Page } from "../interfaces/page"
import Link from "next/link"

interface Props {
  page: Page | Category
  categories: Category[]
}

export default function ListCategories(props: Props) {
  const pathname = usePathname()

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">{props.page.data.name}</h2>
          <p className="mt-2 text-lg leading-8 ">
            {props.page.data.description}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {props.categories?.map((category, i) => (
            <article key={i} className="flex max-w-xl flex-col items-start justify-between">
              <div className=" min-h-80 aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 mb-3">
                <img className="h-60 w-full object-cover object-center lg:h-full lg:w-full" src={category.data.thumbnailUrl || 'https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg'} alt="" />
              </div>
              
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={'Mar 16, 2020'} className="">
                  {'2020-03-16'}
                </time>
                
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 ">
                  <Link href={`${pathname}/${category?.slug}`}>
                    <span className="absolute inset-0" />
                    {category.data.name}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 ">{category.data.description}</p>
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
