import styles from './MyLoader.module.css'

export function MyLoader () {

  return(
    <div className={styles.loading}>
      Loading&#8230;
    </div>
  )
}