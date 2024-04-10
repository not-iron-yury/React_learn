import styles from './MyModal.module.scss'

export function MyModal ({children, visible, setVisible}) {

  const rootClasses = visible 
                    ? [styles.myModal, styles.active].join(" ")
                    : styles.myModal;
  // ----------------------------------------------------- //
  
  return(
    <div className={rootClasses} onClick={() => setVisible(false)}>
      <div className={styles.myModal__body} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}