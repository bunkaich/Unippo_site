import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Section from 'components/section'
import SectionBody from 'components/section-body'
import IconHedding from 'components/icon-hedding'
import Image from 'next/image'
import eyecatch from 'images/top_02.JPG'
import styles from 'styles/index.module.css'
import Button from 'components/button'
import Grid from 'components/grid'
import Box from 'components/box'
import Card from 'components/card'
import Describe from 'components/describe'
import Column from 'components/column'

export default function Activity() {
  return (
    <Container>
      <Meta
        pageTitle='活動内容'
        pageDesc='Unippoでの活動内容を紹介するページ'
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <div className={[styles.fullWidth, styles.topEyecatch].join(' ')}>
        <figure>
          <Image
            src={eyecatch}
            alt=''
            layout='fill'
            sizes='100vw'
            //width={1920}
            //height={800}
            objectFit='cover'
            objectPosition='50% 10%'
          />
        </figure>
      </div>
      <Section>
        <SectionBody>
          <h2 style={{ textAlign: 'center' }}>
            「居心地の良い場所」が
            <br className={styles.brMb} />
            学びの場となるように
          </h2>
          <div style={{ marginTop: 'calc(var(--space-xs))' }}>
            <Grid rows='grid2'>
              <div style={{ textAlign: 'left', fontSize: 'calc(var(--body))' }}>
                私達は子どもたちにとって居心地の良い場所が学びの場所となれるように活動をしています。
                平日の日中に学校の外で過ごせる学びの場と、学校の中で教室以外の場所で過ごせる学びの場を運営しています。
              </div>
              <figure className=''>
                <Image
                  src='/assets_03.png'
                  alt=''
                  layout='responsive'
                  sizes='100vw'
                  width={1500}
                  height={700}
                  objectFit='contain'
                />
              </figure>
            </Grid>
          </div>
        </SectionBody>
        <Grid rows='grid2' gap='var(--space-sm)'>
          <div
            style={{
              backgroundColor: 'var(--accent-yellow)',
              padding: 'var(--space-xs)',
            }}
          >
            <Card basicStyle title='学校内フリースクール' img='/card_01.JPG'>
              学校には行きたいけど、教室に行くことに難しさを感じる子どもたち向けに、学校と連携し校内にフリースクールを運営しています。この場所では教科学習以外にも様々なアクティビティーに挑戦しています。
            </Card>
          </div>
          <div
            style={{
              backgroundColor: 'var(--gray-10)',
              padding: 'var(--space-xs)',
            }}
          >
            <Card basicStyle title='学校外フリースクール' img='/card_06.JPG'>
              学校に行くことに難しさを感じる子どもたち向けに、学校外の施設を利用してフリースクールを運営しています。子どもたち一人ひとりの興味関心に寄り添い、ユニークな一歩を踏み出すことができるようなプログラムを実施しています。
            </Card>
          </div>
        </Grid>
      </Section>
      <Section fullWidth>
        <IconHedding color='blue' borderOff>
          学校外フリースクール
        </IconHedding>
        <Column>
          <Grid rows='grid3'>
            <Card basicStyle title='安全と安心' img='/card_07.JPG'>
              子どもたちが心理的・肉体的に安全が保たれている状況で過ごせることが何よりも大切だと考えています。そのための空間づくり、スタッフの接し方、プログラムづくりを意識しています。
            </Card>
            <Card basicStyle title='学び手主体の学習' img='/card_09.JPG'>
              学びの主体をいつも子どもたちにおくようにしています。プログラムを準備したとしても、それに必ず参加しなければいけないわけではなく、あくまでも子どもたちの意思による選択を尊重しています。
            </Card>
            <Card basicStyle title='自信になる体験' img='/card_10.JPG'>
              子どもたちが自らの意思で緒戦したことがらに、成果と過程を通して、子どもたちが自分に自信をつけられる体験ができるように意識をしています。
            </Card>
          </Grid>
        </Column>
        <Button link='/' rightOn>
          学校関係者の方々へ
        </Button>
      </Section>
      <Section fullWidth color='gray'>
        <IconHedding color='yellow' borderOff>
          学校外フリースクール
        </IconHedding>
        <Grid rows='grid2'>
          <Describe imgOn radiusOn img='/card_03.JPG'></Describe>
          <Describe radiusOn>
            <div>
              自分らしく学べる場所
              <br />
              すべての子どもたちに、学校や家以外の場所に、
              自分らしく学べる空間を提供したいという思いで、
              フリースクールを運営しています。午前中はスタッフの準備したプログラムを
              通して自分の世界を広げる体験を、午後は自分の好きなことに自由に没頭する時間を設けています。
            </div>
          </Describe>
        </Grid>
        <div style={{ paddingBottom: 'var(--space-md)' }}></div>
        <Grid rows='grid2'>
          <Describe imgOn radiusOn img='/card_08.JPG'></Describe>
          <Describe radiusOn>
            <div>
              フリースクール概要
              <br />
              ・日時：月二回(各月の日程詳細は下記リンク記載)
              <br />
              ・内容：午前中プログラム/午後自由時間
              <br />
              ・料金：2,500円/日
              <br />
              ・持ち物：昼食
              <br />
              ・場所：3rdschool吉祥寺校(東京都武蔵野市吉祥寺
              <br />
              　　　　本町2-17-2マリオンワンビルB1)
              <br />
            </div>
          </Describe>
        </Grid>
        <div style={{ paddingBottom: 'var(--space-sm)' }}></div>
        <Button link='https://peatix.com/event/3367821/view' rightOn altColor>
          フリースクールに参加する
        </Button>
      </Section>
      <div style={{ paddingBottom: 'var(--space-xl)' }}></div>
    </Container>
  )
}
