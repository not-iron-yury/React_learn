import styles from './MyLoader.module.scss'

export function MyLoader () {

  return(
    <div className={styles.loading}>
      Loading&#8230;
    </div>
  )
}