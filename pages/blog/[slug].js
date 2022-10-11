import { getPostBySlug, getAllSlugs } from 'lib/api'
import { getPlaiceholder } from 'plaiceholder'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/image'
import PostBody from 'components/post-body'
import ConvertBody from 'components/convert-body'
import { eyecatchLocal } from 'lib/constants'

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
}) {
  return (
    <Container>
      <article style={{ marginBottom: 'var(--space-xl)' }}>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=''
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority
            placeholder='blur'
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <PostBody>
          <ConvertBody contentHTML={content} />
        </PostBody>
      </article>
    </Container>
  )
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug

  const post = await getPostBySlug(slug)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const { base64 } = await getPlaiceholder(eyecatch.url)
  eyecatch.blurDataURL = base64
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
    },
  }
}
