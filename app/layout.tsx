
import '@/src/styles/globals.css'
import { getSiteById } from '@/src/lib/sites'
import QueryProvider from '@/src/providers/QueryProvider'
import ThemeNextProvider from '@/src/providers/ThemeNextProvider'
import { UIProvider } from '@/src/providers/UIProvider'
import { getPagesByParentId, getPagesNavigation } from '@/src/lib/pages'
import { HeaderP0 } from '@/src/components/header/HeaderP0'

export const metadata = {
  title: 'Portfolio',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const site = await getSiteById()
  const navigation = await getPagesNavigation()
  const pages = await getPagesByParentId()
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <QueryProvider >
          <ThemeNextProvider site={site} >
              <UIProvider>
                <HeaderP0 site={site} pages={pages} />
                {children}
              </UIProvider>
          </ThemeNextProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
