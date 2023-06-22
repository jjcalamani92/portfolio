'use client'
import { Category } from '@/src/interfaces/category'
import { Page } from '@/src/interfaces/page'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
  page: Page | Category
  categories: Category[]
}

export function ListCategories1(props: Props) {
  const pathname = usePathname()
  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">{props.page.data.name}</h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            {props.page.data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          {props.categories?.map((category, i) => (

            <div key={i}>
              <img className="relative z-10 object-cover w-full rounded-md h-96" src={category.data.thumbnailUrl || 'https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg'} alt="" />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-cris-fill rounded-md shadow dark:bg-gray-900">
                <Link href={`${pathname}/${category?.slug}`} className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                {category.data.name}
                </Link>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm line-clamp-3">
                {category.data.description}
                </p>

                {/* <p className="mt-3 text-sm text-blue-500">21 October 2019</p> */}
              </div>
            </div>
          ))
          }

          <div>
            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-cris-fill rounded-md shadow dark:bg-gray-900">
              <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                How to use sticky note for problem solving
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                laudantium quia tempore delect
              </p>

              {/* <p className="mt-3 text-sm text-blue-500">20 October 2019</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
