import Button from "@/shared/ui/ButtonLink"
import MangaImage from "@/shared/ui/Image"
import styles from "./Mangablock.module.scss"

export default (props) =>{
    const {id, 
        image, 
        chaptersData
    } = props
    return(
        <>
    <div className={styles.Container}>
        <MangaImage className = {styles} src = {image} alt = {image}/>
        <div className= {styles.ContainerButton}>
            <h2 className={`${styles.VolumeNumber} bn upc`} >volume {id}</h2>
            {chaptersData.map(item => {
                return(
                    <Button key = {item} link = {`/chapter/${item}`} width = {90}>Chapter {item}</Button>
                )
            })}
        </div>
    </div>
      </>
    )
}