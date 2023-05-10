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
        <div className={styles.centeredText}>ご支援について</div>
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
      <Section>
        <IconHedding color='yellow' borderOff>
          支援への感謝とお礼
        </IconHedding>
        <Grid rows='grid2' gap='var(--space-sm)'>
          <div
            style={{
              backgroundColor: 'var(--accent-yellow)',
              padding: 'var(--space-xs)',
            }}
          >
            <Card basicStyle title='ニュースレターのお届け' img='/card_01a.jpg'>
              サポーターの皆さまには感謝と御礼の気持ちを込めて、定期的にニュースレターをお届けしています。ニュースレターには、活動の最新情報や成果報告、子どもたちの声や保護者の感想などが掲載されており、皆さまが支援してくださった活動の結果を確認していただくことができます。
            </Card>
          </div>
          <div
            style={{
              backgroundColor: 'var(--gray-10)',
              padding: 'var(--space-xs)',
            }}
          >
            <Card
              basicStyle
              title='講演会や報告会へのご招待'
              img='/card_02a.jpg'
            >
              Unippoでの活動を直接お伝えする機会を設けるために、不定期で開催される講演会や報告会にサポーターの皆さまをご招待させていただきます。これらのイベントでは、活動の詳細や最新の取り組み、子どもたちの様子や成長、団体の今後の展望についてご紹介させていただきます。
            </Card>
          </div>
        </Grid>
      </Section>
      <div style={{ paddingBottom: 'var(--space-xl)' }}></div>
    </Container>
  )
}
