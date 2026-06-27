import { useEffect, useState } from "react"
import wikiApi from "@/shared/api/wiki"




const useWiki = () => {
    const [charactersData, setCharactersData] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    const GetDataCharacters = async () => {
            const data = await wikiApi.getAllCharacters()
            setCharactersData(data)
    }

    const characterSlider =  (index) => {
        setCurrentIndex((index + charactersData.length) % charactersData.length)
    }
    const addToFavoriteCharacters = async () => {
        await wikiApi.addFavoriteCharacter(currentIndex + 1)
    }
    useEffect(()=> {    
        GetDataCharacters()
    }, [])
    return{charactersData, characterSlider, currentIndex, addToFavoriteCharacters}
}

export default useWiki