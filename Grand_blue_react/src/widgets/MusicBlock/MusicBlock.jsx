import { useContext } from 'react';
import { MangaContext } from '@/entities/grandsite';
import LyrickBlock from "@/entities/grandsite/ui/LyrickBlock"
import MusicPlayerBlock from "@/entities/grandsite/ui/MusicPlayerBlock"
import styles from './MusicBlock.module.scss'


export default () => {
    const {musicData, currentMusicIndex, videoAudioRef} = useContext(MangaContext)

    return(
        <div className={`${styles.MusicBlock} posrel`} >
            <MusicPlayerBlock />
            <div className={styles.VideoLyricBlock}>
                <div className= {styles.videoBlock} >
                    <video ref={videoAudioRef} className= {styles.video} src={musicData[currentMusicIndex]?.video_path} />
                </div>
                <LyrickBlock />
            </div>
        </div>
    )
}