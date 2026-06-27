import { useEffect, useState } from "react"
import mangaApi from "@/shared/api/manga/Index"


const useManga = () => {
    const [mangaData, setMangaData] = useState(null)
   
    useEffect(()=> {
        mangaApi.getAll()
        .then(setMangaData)
        .catch(error => console.error("Ошибка при загрузке:", error));
    }, [])

    return {mangaData}
}

export default useManga