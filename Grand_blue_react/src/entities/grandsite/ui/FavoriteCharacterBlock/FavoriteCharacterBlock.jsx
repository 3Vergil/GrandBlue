import MangaImage from "@/shared/ui/Image/MangaImage"

import styles from "./FavoriteCharacterBlock.module.scss"
import { useContext } from "react"
import { MangaContext } from "../../module/MangaContext"
import IconButton from "../../../../shared/ui/IconButton"
import Button from "../../../../shared/ui/Button/Button"

export default (props) => {
    const {characterId} = props
    const {charactersData, RemoveCharacter} = useContext(MangaContext)
    if(!charactersData){
        return(<><h1>Loading Data</h1></>)
    }

    return (
        <div className={`${styles.CharacterBody} `}>
            <MangaImage className = {styles} src = {charactersData[characterId]?.character_img}/>
            <h2 className="posab">{charactersData[characterId]?.surname} {charactersData[characterId]?.name}</h2>
            <button onClick={() => RemoveCharacter(characterId+1)}>Delete</button>
        </div>
    )
}