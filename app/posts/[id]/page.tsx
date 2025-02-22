import Link from 'next/link'
import { Date } from '@/components/Date'
import { getPostData, getSortedPostsData } from '@/lib/posts'

type Params = Promise<{ id: string }>

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
}

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params
  const postData: PostData = await getPostData(id)

  return {
    title: postData.title,
  }
}

export const generateStaticParams = async () => {
  const postsData = await getSortedPostsData()

  return postsData.map((post) => ({ id: post.id }))
}

const Page = async ({ params }: Props) => {
  const { id } = await params
  const postData: PostData = await getPostData(id)

  return (
    <>
      <h1 className="text-2xl mb-1">{postData.title}</h1>

      <div className="text-gray-600 mb-5">{Date(postData.date)}</div>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className="markdown" />

      <div className="my-5">
        <Link href="/" className="text-gray-600 text-sm underline">
          Back to Top
        </Link>
      </div>
    </>
  )
}

export default Page
