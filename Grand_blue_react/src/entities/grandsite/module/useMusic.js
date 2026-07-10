import musicApi from "@/shared/api/music"
import { useEffect, useRef, useState } from "react"

const useMusic= ()=> {
    const [musicData, setMusicData] = useState([])
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)
    const videoAudioRef = useRef(null)
    const getMusicData = async () => {
            const data = await musicApi.getMusics()
            setMusicData(data)
    }
    const toggleAudio = () => {
        if(isPlaying){
            videoAudioRef.current.pause()
        }
        else{
            videoAudioRef.current.play()
            videoAudioRef.current.loop = true
        }
        setIsPlaying(!isPlaying)
    }
    const Replay = () => {
        videoAudioRef.current.currentTime = 0
    }
    const MusicSlider =  (index) => {
        setCurrentMusicIndex((index + musicData?.length) % musicData?.length)
        setIsPlaying(false)
    }
    useEffect(()=> { 
        getMusicData()
    }, [])
    return{musicData, MusicSlider, currentMusicIndex, isPlaying, toggleAudio,videoAudioRef, Replay}
}

export default useMusic