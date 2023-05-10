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
    >
      <div className={styles.inner} style={{ maxWidth: width }}>
        {children}
      </div>
    </section>
  )
}
