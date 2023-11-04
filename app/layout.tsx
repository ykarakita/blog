import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import siteMetadata from '@/data/siteMetadata'

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className}`}>
        <section className="mx-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0">
          <Header />
          <main>{children}</main>
        </section>
      </body>
    </html>
  )
}
