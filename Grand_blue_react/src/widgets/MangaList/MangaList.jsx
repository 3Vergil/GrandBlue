import { useContext } from "react";
import { motion } from "motion/react"
import {MangaBlock} from "@/entities/grandsite";
import { MangaContext } from "@/entities/grandsite";
import styles from "./MangaList.module.scss"



export default () =>{
    const {
     mangaData
    } = useContext(MangaContext)

    if (!mangaData || !mangaData.Volumes) {
    return <h2>Загрузка данных c сервера...</h2>;
  }
    return(
        <div className={styles.Container}>
          {mangaData.Volumes.map((item, i)=>{
            const volumeNumber = item.volume_number
            const chapters = mangaData.Chapters[i]?.chapters
            const imagePath = mangaData.ImagePath[i]?.image_url
            return (
              <MangaBlock key = {volumeNumber}
              id = {volumeNumber} 
              chaptersData = {chapters}  
              image = {`http://127.0.0.1:2014/${imagePath}`}
              />
             );
          })}
        </div>

    )
}