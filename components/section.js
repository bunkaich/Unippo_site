import styles from 'styles/section.module.css'

export default function Section({
  children,
  fullWidth = false,
  color = 'yellow',
  width = '800px',
}) {
  return (
    <section
      className={
        fullWidth ? `${styles.fullwidth} ${styles[color]}` : styles.basic
      }
      style={{ maxWidth: width }}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
