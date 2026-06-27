

import styles from './IconButton.module.scss'

export default () =>{
    
    return(
        <div className= {styles.IconBody}>
            <img className= {styles.DeleteButton_top} src="/src/shared/assets/trash-can.svg" />
            <img className={styles.DeleteButton_bottom} src="/src/shared/assets/trash-can-bottom.svg" />
        </div>
    )
}