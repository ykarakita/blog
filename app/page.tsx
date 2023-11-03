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
            <span className="mr-3">
              <Link href={`posts/${post.id}`}>{post.title}</Link>
            </span>
            <span>{Date(post.date)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
