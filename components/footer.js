import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'styles/footer.module.css'
import Link from 'next/link'
import Button from 'components/button'
import Grid from 'components/grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGreaterThan,
  faBars,
  faCaretUp,
  faChevronUp,
  faDash,
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div
          className={styles.fullWidth}
          style={{ backgroundColor: 'var(--accent-yellow)' }}
        >
          <div className={styles.footerContainer}>
            <Link href=''>
              <a className={styles.btn}>
                <FontAwesomeIcon icon={faChevronUp} />
                <span style={{ marginLeft: '1rem' }}>ページトップ</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.spaceBetween}>
          <div className={styles.flexItem}>
            <p className={styles.bottomDashed}>
              <FontAwesomeIcon icon={faGreaterThan} />
              <span style={{ marginLeft: '1rem' }}>私たちについて</span>
            </p>
            <ul style={{ display: 'none' }}>
              <li>団体概要</li>
              <li>団体概要</li>
              <li>団体概要</li>
            </ul>
          </div>
          <div className={styles.flexItem}>
            <p className={styles.bottomDashed}>
              <FontAwesomeIcon icon={faGreaterThan} />
              <span style={{ marginLeft: '1rem' }}>活動内容</span>
            </p>
            <ul style={{ display: 'none' }}>
              <li>団体概要</li>
              <li>団体概要</li>
              <li>団体概要</li>
            </ul>
          </div>
          <div className={styles.flexItem}>
            <p className={styles.bottomDashed}>
              <FontAwesomeIcon icon={faGreaterThan} />
              <span style={{ marginLeft: '1rem' }}>News・コラム</span>
            </p>
            <ul style={{ display: 'none' }}>
              <li>団体概要</li>
              <li>団体概要</li>
              <li>団体概要</li>
            </ul>
          </div>
          <div className={styles.flexItem}>
            <p className={styles.bottomDashed}>
              <FontAwesomeIcon icon={faGreaterThan} />
              <span style={{ marginLeft: '1rem' }}>支援について</span>
            </p>
            <ul style={{ display: 'none' }}>
              <li>団体概要</li>
              <li>団体概要</li>
              <li>団体概要</li>
            </ul>
          </div>
        </div>
        <div className={[styles.flexContainer, styles.dashed].join(' ')}>
          <Logo />
          <div style={{ fontSize: 'calc(var(--body)*0.7)' }}>
            NPO法人Unippo（特定非営利活動法人Unippo）
            <br />
            〒180-0004 東京都武蔵野市吉祥寺本町2-17-2
            <br />
            マリオンワンビルB1
          </div>
          <Button square>お問い合せ</Button>
        </div>
      </Container>
    </footer>
  )
}
