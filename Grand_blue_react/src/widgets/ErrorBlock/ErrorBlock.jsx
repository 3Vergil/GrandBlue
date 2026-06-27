import MangaImage from '@/shared/ui/Image'
import Button from '@/shared/ui/ButtonLink'
import styles from './ErrorBlock.module.scss'

export default () => {
    return(
        <main className= {styles.main}>
        <div className= {`${styles.container} posrel`}>
            <h1 className={styles.title}>404 - DIVE PATH OBSTRUCTED</h1>
            <br />
            <h2 className={styles.content}>Looks like you've been caught in a current and ended up somewhere unexpected. 
                The page you are looking for has been pulled under.</h2>
            <br />
            <Button link = '/' width = {120}>Return to Home</Button>
            <img src = 'src\assets\images\CrackedMask.png' className = {styles.Image}/>
        </div>
        </main>
    )
}