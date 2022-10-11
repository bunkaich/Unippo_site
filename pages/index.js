import Hero from 'components/hero'
import Container from 'components/container'
import Section from 'components/section'
import PostBody from 'components/post-body'
import SectionBody from 'components/section-body'
import IconHedding from 'components/icon-hedding'
import Image from 'next/image'
import eyecatch from 'images/pagetop_01.jpg'
import styles from 'styles/index.module.css'
import Button from 'components/button'
import Grid from 'components/grid'
import Box from 'components/box'
import Card from 'components/card'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
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
        <IconHedding color='blue'>お知らせ</IconHedding>
        <Grid rows='grid4' gap='var(--space-xs)'>
          <Link href='/blog/accessory'>
            <a>
              <Box flagOn img='/card_10.JPG'>
                レジンでアクセサリーづくり【平日日中の居場所】
              </Box>
            </a>
          </Link>
          <Box flagOn img='/card_09.JPG'>
            【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」
          </Box>
          <Box flagOn img='/card_08.JPG'>
            【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」
          </Box>
          <Box flagOn img='/card_07.JPG'>
            【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」
          </Box>
        </Grid>
        <Button rightOn>お知らせ一覧</Button>
      </Section>
      <Section>
        <IconHedding color='yellow'>活動の内容</IconHedding>
        <SectionBody>
          Unippoという名前には「子どもたちにユニークな一歩を踏み出してほしい」という願いが込められています。一人ひとりがもっている「やってみたい」という小さな心の火を、焦らず大切に育てていきたいと思います。
        </SectionBody>
        <Grid rows='grid2'>
          <Card title='学校外フリースクール' innerOn>
            学校施設を利用し安全で
            <br />
            豊かな放課後をつくる
          </Card>
          <Card title='学校外フリースクール' img='/card_02.JPG' innerOn>
            学校施設を利用し安全で
            <br />
            豊かな放課後をつくる
          </Card>
        </Grid>
      </Section>
      <Section fullWidth>
        <IconHedding color='blue'>教育コラム</IconHedding>
        <SectionBody>
          Unippoという名前には「子どもたちにユニークな一歩を踏み出してほしい」という願いが込められています。一人ひとりがもっている「やってみたい」という小さな心の火を、焦らず大切に育てていきたいと思います。
        </SectionBody>
        <Grid rows='grid3' gap='var(--space-xs)'>
          <Box img='/card_06.JPG'>
            【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」
          </Box>
          <Box img='/card_05.JPG'>
            【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」
          </Box>
          <Box img='/card_04.JPG'>
            【イベント開催】7/14(木)開催！教室開放「すきなことをシェアしよう」
          </Box>
        </Grid>
        <Button bars rightOn>
          コラム一覧
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
    </Container>
  )
}
