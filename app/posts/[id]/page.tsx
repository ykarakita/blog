import { getPostData, getSortedPostsData } from '@/lib/posts'
import { Date } from '@/components/Date'

type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
}

export const generateMetadata = async ({ params }: Props) => {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
  }
}

export const generateStaticParams = async () => {
  const postsData = getSortedPostsData()

  return postsData.map((post) => ({ id: post.id }))
}

const Page = async ({ params }: Props) => {
  const { id } = params
  const postData: PostData = await getPostData(id)

  return (
    <>
      <h1 className="text-3xl mb-1">{postData.title}</h1>

      <div className="text-500 mb-10">
        <span>{Date(postData.date)}</span>
      </div>

      <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  )
}

export default Page
