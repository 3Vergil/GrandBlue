import { createContext } from "react"
import useManga from "./useManga"
import useAuth from "./useAuth"
import useProfile from "./useProfile"
import useWiki from "./useWiki"
export const MangaContext = createContext()

export const MangaProvider = (props) => {
    const {children} = props
    const {
        mangaData
    } = useManga()
    const { 
    authSwitcher,
    LogInControl, 
    control, 
    handleClick,
    Sumbit
    } = useAuth()
    
    const {userData, fileInputRef, handleDragOver, handleDrop, QuitAccount, UpdateName,RemoveCharacter } = useProfile()

    const {charactersData,characterSlider, currentIndex, addToFavoriteCharacters} = useWiki()

    return(
        <MangaContext.Provider
        value={
           { mangaData, 
            LogInControl, 
            control, 
            handleClick,
            Sumbit,
            authSwitcher,
            userData,
            fileInputRef, 
            handleDragOver, 
            handleDrop,
            QuitAccount,
            UpdateName ,
            charactersData,
            characterSlider,
            currentIndex,
            addToFavoriteCharacters,
            RemoveCharacter,
           }
        }>
            {children}
        </MangaContext.Provider>
    )
}
