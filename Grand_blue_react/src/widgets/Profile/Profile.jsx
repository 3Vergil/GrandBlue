import { useContext } from "react"
import { MangaContext } from "@/entities/grandsite"
import { ProfileBlock } from "@/entities/grandsite"
import { UserCabinet } from "../../entities/grandsite"
import MangaImage from "@/shared/ui/Image"
import ButtonLink from "@/shared/ui/ButtonLink"
import styles from './Profile.module.scss'
import FavoriteCharacterBlock from "@/entities/grandsite/ui/FavoriteCharacterBlock"
export default () =>{
    const {userData} = useContext(MangaContext)
     return(
        <main className= {styles.main}>
        <article className={styles.content}>
            <ProfileBlock />
            <div className = {styles.CurrentRead}>
                <MangaImage className = {styles} src ={`http://127.0.0.1:2014/${userData?.Volume}`} />
                <div>
                <h1>Continue to read chapter {userData?.chapterId} <br />
                    From Page {userData?.Page}
                </h1>
                <ButtonLink link = {`/chapter/${userData?.chapterId}`} width = {200}>chapter {userData?.chapterId}</ButtonLink>
                </div>
            </div>
            
            <div className= {`${styles.FavoriteCharacters} posrel`}>
                 <h1 className="posab">Favorite Characters</h1>
                 <div className={styles.FavCharContainer}>
                {userData?.favorite_characters?.map((characterId )=> {
                    return <FavoriteCharacterBlock key = {characterId} characterId = {characterId -1}/>
                })}
                </div>
            </div>
            <UserCabinet  className = {styles.CommentHistory}>comment history</UserCabinet>
        </article>
        </main>
    )
    
}