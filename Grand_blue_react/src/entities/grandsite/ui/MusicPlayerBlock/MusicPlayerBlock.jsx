import  MangaImage  from '@/shared/ui/Image';
import { useContext } from 'react';
import { MangaContext } from '../../module/MangaContext';
import styles from './MusicPlayerBlock.module.scss'

export default (props) => {
    const {background} = props
    const {musicData, MusicSlider, currentMusicIndex, isPlaying, toggleAudio, Replay} = useContext(MangaContext)
 
    return(
        <div className= {`${styles.MusicPlayerBox} `} >
        <div className= {styles.MusicPlayerButton} 
        style={{'--background': `url(${musicData[currentMusicIndex]?.cover_path })`}}>
            <img onClick={() =>MusicSlider(Number(currentMusicIndex) - 1)} src='/src/shared/assets/icon/previous.png'/>
            <img onClick={()=> toggleAudio()}  src={`src/shared/assets/icon/${isPlaying ? 'pause.png': 'play.png'}`} />
            <img onClick={()=> Replay()}  src='/src/shared/assets/icon/replay.png'/>
            <img onClick={() =>MusicSlider(Number(currentMusicIndex) + 1)}   src='/src/shared/assets/icon/next.png'/>
        </div>
    </div>
    )
}