import { getAllCategories, getAllPostsByCategory } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Section from 'components/section'
import PostBody from 'components/post-body'
import SectionBody from 'components/section-body'
import IconHedding from 'components/icon-hedding'
import Image from 'next/image'
import eyecatch from 'images/pagetop_01b.JPG'
import styles from 'styles/index.module.css'
import supportStyles from 'styles/support.module.css'
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
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='/support'>詳しく見る</Button>
          </Card>
          <Card title='スタッフとして支援' img='/assets_05.png'>
            皆様からのご支援が子どもたちの笑顔を
            <br />
            生み出します。
            <br />
            応援をよろしくお願いいたします。
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='about'>詳しく見る</Button>
          </Card>
        </Grid>
      </Section>
      <Section fullWidth color='bgImg' width='1200px'>
        <IconHedding color='red' borderOff>
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
        <Grid rows='grid3'>
          <Card title='継続的なご支援' img='/assets_06.png'>
            下記ボタンより寄付金額をお選びください。
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Grid rows='grid2'>
              <div>
                <Link href='https://buy.stripe.com/aEU28TabX1FUg4o6ox'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥1000</span>
                  </a>
                </Link>
              </div>
              <div>
                <Link href='https://buy.stripe.com/4gwcNxdo9acq2dyfZ8'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥3000</span>
                  </a>
                </Link>
              </div>
            </Grid>
            <div style={{ paddingBottom: 'calc(var(--space-xs)*0.5)' }}></div>
            <Grid rows='grid2'>
              <div>
                <Link href='https://buy.stripe.com/dR6eVFck52JYg4ofZ9'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥5000</span>
                  </a>
                </Link>
              </div>
              <div>
                <Link href='https://buy.stripe.com/fZe9Bl83P2JY3hC9AM'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥10000~</span>
                  </a>
                </Link>
              </div>
            </Grid>
          </Card>
          <Card title='今回のみのご支援' img='/assets_07.png'>
            下記ボタンより寄付金額をお選びください。
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Grid rows='grid2'>
              <div>
                <Link href='https://donate.stripe.com/dR628T3Nz0BQbO8fZ4'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥1000</span>
                  </a>
                </Link>
              </div>
              <div>
                <Link href='https://donate.stripe.com/dR600L4RD1FU4lGaEF'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥3000</span>
                  </a>
                </Link>
              </div>
            </Grid>
            <div style={{ paddingBottom: 'calc(var(--space-xs)*0.5)' }}></div>
            <Grid rows='grid2'>
              <div>
                <Link href='https://donate.stripe.com/dR67tdesdbgug4oeV1'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥5000</span>
                  </a>
                </Link>
              </div>
              <div>
                <Link href='https://donate.stripe.com/dR6aFpabXdoCcScaEM'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥10000~</span>
                  </a>
                </Link>
              </div>
            </Grid>
          </Card>
          <Card title='スタッフとして支援' img='/assets_05.png'>
            ボランティアとして居場所の運営や、その他のUnippoの活動に関わってくださるメンバーを募集しています。
            ボタンを押すとgoogleフォームへ移動します。
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='about'>メンバーとして応募</Button>
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
