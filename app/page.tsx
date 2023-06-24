import { getSiteById } from '@/src/lib/sites'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react';
import { Home0 } from '../src/components/home/Home0';
import { Home1 } from '@/src/components/home/Home1';
import { Home2 } from '@/src/components/home/Home2';


export default async function Home() {
  const site = await getSiteById()

  const components = {
    Home0: () => (
      <Home0 home={site.data.html.home} />
    ), Home1, Home2: () => (
      <Home2 name={site.data.info.name} />
    ),
  }
  return (
    <React.Fragment>

      <MDXRemote
        source={site.data.html.home.component}
        components={components}
      />
    </React.Fragment>
  )
}
