import styles from 'styles/card.module.css'
import Image from 'next/image'
import Button from 'components/button'

export default function Card({
  children,
  title = '寄付による支援',
  img = '/card_01.JPG',
  innerOn = false,
  basicStyle = false,
  greenOn = false,
  buttonText = '詳しく見る',
  link = '',
}) {
  return (
    <div
      className={
        basicStyle ? styles.basic : innerOn ? styles.altCard : styles.card
      }
    >
      {innerOn ? '' : <h3 className={styles.title}>{title}</h3>}
      <figure className={innerOn ? styles.altCardImg : styles.cardImg}>
        {innerOn || basicStyle ? (
          <Image
            src={img}
            alt=''
            layout='fill'
            objectFit='cover'
            className={greenOn ? styles.greenLine : styles.blueLine}
          />
        ) : (
          <Image
            src={img}
            alt=''
            layout='responsive'
            sizes='100vw'
            width={400}
            height={240}
            objectFit='contain'
          />
        )}
      </figure>
      <div className={[styles.cardInner, innerOn ? styles.gray : ''].join(' ')}>
        <div
          className={
            innerOn || basicStyle ? styles.innerDesctiption : styles.description
          }
        >
          {children}
        </div>
        {innerOn ? (
          <h3 className={innerOn ? styles.innerTitle : styles.title}>
            {title}
          </h3>
        ) : (
          ''
        )}
        {/*basicStyle ? (
          ''
        ) : innerOn ? (
          <Button altColor link={link}>
            {buttonText}
          </Button>
        ) : (
          <Button link={link}>{buttonText}</Button>
        )*/}
      </div>
    </div>
  )
}
