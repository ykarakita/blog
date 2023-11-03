import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="text-center sm:text-left">
      <h1>
        <Link href="/">{siteMetadata.title}</Link>
      </h1>
    </header>
  )
}
