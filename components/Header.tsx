import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

export const Header = () => {
  return (
    <header className="text-center sm:text-left mt-5 mb-10">
      <h1 className="text-2xl">
        <Link href="/">{siteMetadata.title}</Link>
      </h1>
    </header>
  )
}
