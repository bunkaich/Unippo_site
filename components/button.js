import styles from 'styles/button.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Button({
  children,
  link = '/',
  bars = false,
  large = false,
  rightOn = false,
  altColor = false,
  square = false,
}) {
  return (
    <div className={rightOn ? styles.rightSide : styles.centered}>
      <Link href={link}>
        <a
          className={
            large
              ? styles.btnLarge
              : altColor
              ? styles.altBtn
              : square
              ? styles.squareBtn
              : styles.btn
          }
          target='_blank'
        >
          <FontAwesomeIcon icon={bars ? faBars : faGreaterThan} />
          <span style={{ marginLeft: '1rem' }}>{children}</span>
        </a>
      </Link>
    </div>
  )
}
