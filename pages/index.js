import { getAllCategories, getAllPostsByCategory } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Section from 'components/section'
import PostBody from 'components/post-body'
import SectionBody from 'components/section-body'
import IconHedding from 'components/icon-hedding'
import Image from 'next/image'
import eyecatch from 'images/pagetop_01a.jpg'
import styles from 'styles/index.module.css'
import Button from 'components/button'
import Grid from 'components/grid'
import Box from 'components/box'
import Card from 'components/card'
import Link from 'next/link'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import Posts from 'components/posts'

export default function Home({ news, column }) {
  return (
    <Container>
      <Meta
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <div className={[styles.fullWidth, styles.topEyecatch].join(' ')}>
        <figure className={styles.fullWidth}>
          <Image
            src={eyecatch}
            alt=''
            layout='fill'
            sizes='100vw'
            //width={1920}
            //height={800}
            objectFit='cover'
            objectPosition='50% 50%'
          />
        </figure>
      </div>
      <Section>
        <IconHedding color='yellow'>私たちについて</IconHedding>
        <SectionBody>
          私たちは学校に行きたくない子どもたちに、居心地の良い学びの場を提供する活動をしています。たとえ学校の学びのスタイルが合わなくても、誰もが自分らしく学び、成長していくことができる社会を目指しています。
        </SectionBody>
        <Button link='/about' large>
          Unippoとは
        </Button>
      </Section>
      <Section fullWidth>
        <IconHedding color='blue'>Pick up</IconHedding>
        <Box flagOn posts={news} />
        <Button rightOn link='/blog/'>
          お知らせ一覧
        </Button>
      </Section>
      <Section>
        <IconHedding color='yellow'>活動の内容</IconHedding>
        <SectionBody>
          Unippoでは学校の外のフリースクールの運営の他に、学校の中の使用していない教室を利用しての校内フリースクールの運営も行っています。まだ数は多くありませんが、今後様々な地域での活動を検討しています。
        </SectionBody>
        <Grid rows='grid2'>
          <Card title='学校内フリースクール' img='/card_01a.jpg' innerOn>
            学校施設を利用し安全で
            <br />
            豊かな放課後をつくる
          </Card>
          <Card
            title='学校外フリースクール'
            img='/card_02a.jpg'
            innerOn
            greenOn
          >
            地域と連携して子どもたちの
            <br />
            学びの機会をつくる
          </Card>
        </Grid>
      </Section>
      <Section fullWidth>
        <IconHedding color='blue'>活動記録</IconHedding>
        <SectionBody>
          Unippoという名前には「子どもたちにユニークな一歩を踏み出してほしい」という願いが込められています。一人ひとりがもっている「やってみたい」という小さな心の火を、焦らず大切に育てていきたいと思います。
        </SectionBody>
        <Box posts={column} rows='grid3' />
        <Button bars rightOn link='/blog/column'>
          記事一覧
        </Button>
      </Section>
      <Section fullWidth color='bgImg'>
        <IconHedding color='blue' borderOff>
          サポーターになる
        </IconHedding>
        <p
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-xs)',
            fontWeight: '300',
          }}
        >
          子どもたちの学び場の選択肢を増やすために、皆様のお力をお貸し下さい。
        </p>
        <Grid rows='grid2'>
          <Card img='/assets_06.png'>
            皆様からのご支援が子どもたちの笑顔を
            <br />
            生み出します。
            <br />
            応援をよろしくお願いいたします。
          </Card>
          <Card title='スタッフとして支援' img='/assets_05.png'>
            皆様からのご支援が子どもたちの笑顔を
            <br />
            生み出します。
            <br />
            応援をよろしくお願いいたします。
          </Card>
        </Grid>
      </Section>
      {/*
      <Section>
        <IconHedding color='yellow'>私たちも応援しています</IconHedding>
        <Grid rows='grid4'>
          <Box circleOn centerOn img='/card_04.JPG'>
            山田雄太さん
          </Box>
          <Box circleOn centerOn img='/card_04.JPG'>
            三原奈央さん
          </Box>
          <Box circleOn centerOn img='/card_04.JPG'>
            海老沢穣さん
          </Box>
          <Box circleOn centerOn img='/card_04.JPG'>
            青木智宏さん
          </Box>
        </Grid>
        <div style={{ marginRight: 'calc(var(--space-xs) * 0.5)' }}>
          <Button rightOn>応援メッセージを見る</Button>
        </div>
      </Section>
      */}
    </Container>
  )
}

export async function getStaticProps() {
  const catSlug = 'news'
  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)
  const posts = await getAllPostsByCategory(cat.id, 4)

  const catColumn = allCats.find(({ slug }) => slug === 'column')
  const column = await getAllPostsByCategory(catColumn.id, 3)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  for (const post of column) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      news: posts,
      column: column,
    },
  }
  /*
  const posts = await getAllPosts(4)

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
  */
}
