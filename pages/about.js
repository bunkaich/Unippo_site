import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Section from 'components/section'
import SectionBody from 'components/section-body'
import IconHedding from 'components/icon-hedding'
import Image from 'next/image'
import eyecatch from 'public/bgimg.JPG'
import styles from 'styles/index.module.css'
import Button from 'components/button'
import Grid from 'components/grid'
import Box from 'components/box'
import Card from 'components/card'
import Describe from 'components/describe'

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle='私たちについて'
        pageDesc='Unippoについての詳細情報のページ'
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
            objectPosition='50% 20%'
          />
        </figure>
        <div className={styles.centeredText}>私たちについて</div>
      </div>
      <Section>
        <SectionBody>
          <div style={{ marginBottom: 'calc(var(--space-xs)*0.7)' }}>
            <Grid rows='grid2'>
              <h2 className={styles.h2Responsive}>
                すべての子どもたちが
                <br />
                自分らしい一歩を
                <br />
                踏み出せるように
              </h2>
              <figure className=''>
                <Image
                  src='/assets_04.png'
                  alt=''
                  layout='responsive'
                  sizes='100vw'
                  width={300}
                  height={120}
                  objectFit='contain'
                />
              </figure>
            </Grid>
          </div>
          <div style={{ fontSize: 'calc(var(--body))' }}>
            たとえ学校の学びのスタイルが合わなくても、誰もが自分らしく学び、成長していくことができるよう、私たちは、学校に行きたくない子どもたちを対象に、学校の内外に居心地の良い学びの場を提供する活動をしています。
            <br />
            <br />
            Unippoという名前には「子どもたちにユニークな一歩を踏み出してほしい」という願いが込められています。
          </div>
        </SectionBody>
      </Section>
      <Section fullWidth>
        <IconHedding color='blue' borderOff>
          私たちの向き合う社会課題
        </IconHedding>
        <SectionBody centerOn color='blue'>
          学校に行きたくない子たちの
          <br className={styles.brMb} />
          学び場の選択肢の不足
        </SectionBody>
        <Grid rows='grid2'>
          <Describe imgOn img='/card_03.JPG' radiusOn></Describe>
          <Describe radiusOn>
            <div>
              <h3>本当は学校に行きたい</h3>
              様々な事情により、学校に行きたくてもいけない子どもたちがたくさんいます。
              <br />
              学びと成長の機会が損なわれてしまうことは、子どもたちの将来に大きな影響を及ぼすことになります。
              <br />
              しかし、不登校の児童の数に対して、学校以外の学びの場の数が不足している現状があります。
              <br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section>
        <Grid rows='grid2'>
          <Describe imgOn img='/data_01.png'></Describe>
          <Describe>
            <div style={{ textAlign: 'left' }}>
              <h3>不登校時は全国で24万人</h3>
              日本では近年、全国的に不登校の子どもの数が増加傾向にあります。
              その中でも特に小学生の増加率が著しく、その人数は10年前の約3倍にもなります。
              このことからも今後、学校の教室以外の学びの場の重要性は増々高まっていくと考えられます。
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section fullWidth color='green'>
        <IconHedding color='red' borderOff>
          私たちのミッション
        </IconHedding>
        <SectionBody centerOn color='red'>
          居心地の良い
          <br className={styles.brMb} />
          学びの場をつくる
        </SectionBody>
        <Grid rows='grid2'>
          <Describe imgOn img='/card_04a.jpg' radiusOn></Describe>
          <Describe radiusOn>
            <div>
              <h3>安全・安心の確保</h3>
              自分らしく学び、成長するためには何よりもまず心身の安全と安心が確保されている必要があると考えています。
              <br />
              居心地の良い場所でスタッフや子どもたちとの触れ合い、学力に留まらない様々なスキルや感性を身に付けて欲しいという思いで運営をしています。
              <br />
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section>
        <Grid rows='grid2'>
          <Describe imgOn img='/data_02.png'></Describe>
          <Describe>
            <div style={{ textAlign: 'left' }}>
              <h3>子どもたちを取り巻く不安</h3>
              学校に行きたくなくなってしまう要因の中でもっとも割合の高いものは、
              本人たちの不安や無気力によるものです。彼らにとって必要なものは
              安心・安全の確保された居心地の良い場所なのではないでしょうか。
            </div>
          </Describe>
        </Grid>
      </Section>
      <Section fullWidth color='red'>
        <IconHedding color='yellow' borderOff>
          私たちのビジョン
        </IconHedding>
        <SectionBody centerOn color='yellow'>
          誰もが自分らしく
          <br className={styles.brMb} />
          学べる社会に
        </SectionBody>
        <Grid rows='grid2'>
          <Describe imgOn img='/card_05a.jpg' radiusOn></Describe>
          <Describe radiusOn>
            <div>
              子どもだけではなく、大人になってからも、自分の個性や才能に合う学びの機会が、いつもあたりまえのように存在している。
              そのような社会を、私たちは目指していきたいと考えています。
              私たちの活動が、そのような社会を実現するための小さくとも大きな一歩であると信じています。
            </div>
          </Describe>
        </Grid>
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
    </Container>
  )
}
