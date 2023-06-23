
import '@/src/styles/globals.css'
import { getSiteById } from '@/src/lib/sites'
import QueryProvider from '@/src/providers/QueryProvider'
import ThemeNextProvider from '@/src/providers/ThemeNextProvider'
import { UIProvider } from '@/src/providers/UIProvider'
import { getPagesByParentId, getPagesNavigation } from '@/src/lib/pages'
import { HeaderP0, HeaderP1 } from '@/src/components/header'

export async function generateMetadata() {
  const site = await getSiteById()
  return {
    title: site?.data.info.name,
    description: site?.data.info.description,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    icons: {
      icon: site?.data.info.icon,
      shortcut: site?.data.info.icon,
      apple: site?.data.info.icon,
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: site?.data.info.icon,
      },
    },
    openGraph: {
      title: site?.data.info.name,
      description: site?.data.info.description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: site?.data.info.name,
      images: [
        {
          url: site?.data.info.icon,
          width: 800,
          height: 600,
        },
        {
          url: site?.data.info.icon,
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale: 'es_ES',
      type: 'website',
    },
    robots: {
      index: true,
    }
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const site = await getSiteById()
  console.log('site', site)
  const navigation = await getPagesNavigation()
  const pages = await getPagesByParentId()
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <QueryProvider >
          <ThemeNextProvider site={site} >
              <UIProvider>
                <HeaderP1 site={site} pages={pages} />
                {children}
              </UIProvider>
          </ThemeNextProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
