import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { Date } from '@/components/Date'

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <div>
      <ul>
        {allPostsData.map((post) => (
          <li key={post.id}>
            <span className="mr-3">{Date(post.date)}</span>
            <span>
              <Link href={`posts/${post.id}`} className="underline">
                {post.title}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
