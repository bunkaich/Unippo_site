import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/image'
import PostBody from 'components/post-body'
import ConvertBody from 'components/convert-body'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import Posts from 'components/posts'

export default function Column({ posts }) {
  return (
    <Container>
      <Meta pageTitle='コラム一覧' pageDesc='コラム記事の一覧ページ' />
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}
