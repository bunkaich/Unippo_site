import styles from 'styles/box.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Grid from 'components/grid'

export default function Box({
  posts,
  circleOn = false,
  flagOn = false,
  centerOn = false,
  rows = 'grid4',
}) {
  return (
    <Grid rows={rows} gap='var(--space-xs)'>
      {posts?.map(({ title, slug, eyecatch }) => (
        <article className={styles.eachPost} key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <div className={styles.box}>
                <figure
                  className={
                    circleOn
                      ? styles.circleImg
                      : flagOn
                      ? styles.flagImg
                      : styles.boxImg
                  }
                >
                  <Image
                    src={eyecatch.url}
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    sizes='(min-width: 1152px) 576px, 50vw'
                    placeholder='blur'
                    blurDataURL={eyecatch.blurDataURL}
                  />
                </figure>
                <div className={centerOn ? styles.titleCenter : styles.title}>
                  {title}
                </div>
              </div>
            </a>
          </Link>
        </article>
      ))}
    </Grid>
  )
}
