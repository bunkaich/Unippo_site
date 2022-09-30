import styles from  'styles/section-body.module.css'

export default function SectionBody({ children, centerOn = false }) {
  if(centerOn){
    return (
      <div className={styles.lineUpContainer}>
        <p className={styles.messages}>
          <span>{children}</span>
        </p>
      </div>
    )
  }else {
    return (
      <div className={styles.description}>
        {children}
      </div>
    )
  }
}