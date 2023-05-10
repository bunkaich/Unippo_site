import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Link from 'next/link'
import Section from 'components/section'
import SectionBody from 'components/section-body'
import IconHedding from 'components/icon-hedding'
import Image from 'next/image'
import eyecatch from 'images/pagetop_02.jpeg'
import styles from 'styles/index.module.css'
import supportStyles from 'styles/support.module.css'
import Button from 'components/button'
import Grid from 'components/grid'
import Box from 'components/box'
import Card from 'components/card'
import Describe from 'components/describe'
import Column from 'components/column'

export default function Support() {
  return (
    <Container>
      <Meta
        pageTitle='支援について'
        pageDesc='Unippoへの支援についてのページ'
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
          <h2
            style={{ textAlign: 'center', fontSize: 'calc(var(--heading3))' }}
          >
            子どもたちの居場所の創出のため、
            <br className={styles.brMb} />
            ご支援をお願いします
          </h2>
          <div style={{ marginTop: 'calc(var(--space-xs))' }}>
            <Grid rows='grid2'>
              <div style={{ textAlign: 'left', fontSize: 'calc(var(--body))' }}>
                いつもUnnippoを応援してくださってありがとうございます。私たちの活動は皆さまのサポートにより支えられています。
                このページでは寄付のお願いと、皆さまのご支援がどのように活動に活かされているのかを紹介させていただきます。
              </div>
              <figure className=''>
                <Image
                  src='/assets_06.png'
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
      </Section>
      <Section fullWidth>
        <IconHedding color='blue' borderOff>
          寄付金の使いみち
        </IconHedding>
        <Column>
          <Grid rows='grid3'>
            <Card basicStyle title='居場所の運営費用' img='/card_11.jpeg'>
              学校内外のフリースクールの運営費用に使わせていただきます。教室の維持・管理や、教育プログラムの開発に必要な資金を確保することで、子どもたちにより安全で快適な学びの場を提供します。
            </Card>
            <Card basicStyle title='学びコンテンツの導入' img='/card_06a.jpg'>
              子どもたちが学ぶための教材や道具を購入・更新に使用させていただきます。様々な学びのツールを導入することで、子どもたちの個性と才能に合わせた学びの環境を整えることができます。
            </Card>
            <Card basicStyle title='スタッフの研修・育成' img='/card_05a.jpg'>
              Unippoのスタッフは、子どもたちに質の高いサポートを提供するために継続的な研修を受けています。寄付金により、彼らのスキルアップや専門知識の習得をサポートし、子どもたちへの更なる貢献を目指します。
            </Card>
          </Grid>
        </Column>
        <Button
          link='https://docs.google.com/forms/d/e/1FAIpQLSca-azW_RcVPO2Oq4Kw2YAZWe7glQNw7_6zds_NEvn3TwwXnQ/viewform'
          rightOn
        >
          学校関係者の方々へ
        </Button>
      </Section>
      <Section fullWidth color='green' width='1200px'>
        <IconHedding color='red' borderOff>
          ご支援について
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
                <Link href='https://buy.stripe.com/fZe28T6ZL0BQ4lGcMO'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥2000</span>
                  </a>
                </Link>
              </div>
              <div>
                <Link href='https://buy.stripe.com/fZe28T6ZL0BQ4lGcMO'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥5000</span>
                  </a>
                </Link>
              </div>
            </Grid>
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Grid rows='grid2'>
              <div>
                <Link href='https://buy.stripe.com/fZe28T6ZL0BQ4lGcMO'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>￥10000</span>
                  </a>
                </Link>
              </div>
              <div>
                <Link href='https://buy.stripe.com/fZe28T6ZL0BQ4lGcMO'>
                  <a className={supportStyles.btn} target='_blank'>
                    <span>その他</span>
                  </a>
                </Link>
              </div>
            </Grid>
            <Button link='https://buy.stripe.com/fZe28T6ZL0BQ4lGcMO'>
              継続的なご支援
            </Button>
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='https://donate.stripe.com/dR600L4RD1FU4lGaEF'>
              単発でのご支援
            </Button>
          </Card>
          <Card title='今回のみのご支援' img='/assets_07.png'>
            下記ボタンより寄付金額をお選びください。
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='https://buy.stripe.com/fZe28T6ZL0BQ4lGcMO'>
              継続的なご支援
            </Button>
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='https://donate.stripe.com/dR600L4RD1FU4lGaEF'>
              単発でのご支援
            </Button>
          </Card>
          <Card title='スタッフとして支援' img='/assets_05.png'>
            ボランティアとして居場所の運営や、その他のUnippoの活動に関わってくださるメンバーを募集しています。
            ボタンを押すとgoogleフォームへ移動します。
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='about'>メンバーとして応募</Button>
          </Card>
        </Grid>
      </Section>
      <Section fullWidth color='green'>
        <IconHedding color='red' borderOff>
          ご支援について
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
          <Card title='ご支援' img='/assets_06.png'>
            継続的な支援と単発でのご支援をお選びいただけます。
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='https://buy.stripe.com/fZe28T6ZL0BQ4lGcMO'>
              継続的なご支援
            </Button>
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='https://donate.stripe.com/dR600L4RD1FU4lGaEF'>
              単発でのご支援
            </Button>
          </Card>
          <Card title='スタッフとして支援' img='/assets_05.png'>
            ボランティアとして居場所の運営や、その他のUnippoの活動に関わってくださるメンバーを募集しています。
            ボタンを押すとgoogleフォームへ移動します。
            <div style={{ paddingBottom: 'var(--space-xs)' }}></div>
            <Button link='about'>メンバーとして応募</Button>
          </Card>
        </Grid>
      </Section>
      <div style={{ paddingBottom: 'var(--space-xl)' }}></div>
    </Container>
  )
}
