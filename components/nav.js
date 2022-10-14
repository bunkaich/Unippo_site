import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className='sr-only'>MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href='/about'>
            <a onClick={closeNav}>私たちについて</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a onClick={closeNav}>お知らせ</a>
          </Link>
        </li>
        <li>
          <Link href='/activity'>
            <a onClick={closeNav}>活動内容</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a onClick={closeNav}>支援について</a>
          </Link>
        </li>
        <li>
          <Link href='/blog/column'>
            <a onClick={closeNav}>コラム</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
