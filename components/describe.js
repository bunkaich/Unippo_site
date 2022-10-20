import styles from 'styles/describe.module.css'
import Image from 'next/image'

export default function Describe({
  children,
  imgOn = false,
  img = '/eyecatch_001.jpg',
  radiusOn = false,
}) {
  if (imgOn) {
    return (
      <div className={[styles.imgBox, radiusOn && styles.leftRadius].join(' ')}>
        <figure>
          {radiusOn ? (
            <Image src={img} alt='' layout='fill' objectFit='cover' />
          ) : (
            <Image
              src={img}
              alt=''
              layout='responsive'
              sizes='100vw'
              width={1800}
              height={1400}
              objectFit='contain'
            />
          )}
        </figure>
      </div>
    )
  } else {
    return (
      <div
        className={[styles.textBox, radiusOn && styles.rightRadius].join(' ')}
      >
        {children}
      </div>
    )
  }
}
