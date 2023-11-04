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
          <li key={post.id} className="mb-4">
            <div className="text-sm text-gray-500">{Date(post.date)}</div>
            <p>
              <Link href={`posts/${post.id}`} className="text-xl hover:underline">
                {post.title}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
