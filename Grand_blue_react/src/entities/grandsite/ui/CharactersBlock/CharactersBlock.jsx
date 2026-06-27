import  MangaImage  from '@/shared/ui/Image';
import  ButtonLink  from '@/shared/ui/ButtonLink';
import styles from './CharacterBlock.module.scss'
import { useContext } from 'react';
import { MangaContext } from '../../module/MangaContext';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import Button from '@/shared/ui/Button';

export default () => {
    const {charactersData, characterSlider, currentIndex, addToFavoriteCharacters} = useContext(MangaContext)
    if(charactersData === null){
        return(<div>Dowlonding data</div>)
    }
    const isEven = currentIndex % 2 ===0
    return(
        <>
            <div className={`${styles.InnerContainer} posrel`}>

                <h1 className= {`${styles.CharacterName} posab`}>
                    {charactersData[currentIndex]?.surname} {charactersData[currentIndex]?.name}
                    </h1>

                <button className= {`${styles.NavArrow} posab ${styles.left}`} onClick={() => characterSlider(currentIndex -1)}>
                    &#10094;
                </button>
                <AnimatePresence mode='wait'/>
                <motion.div
                key={`char-${currentIndex}`} 
                        initial={{ x: isEven ? -400 : 400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: isEven ? 400 : -400, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        style={{ position: 'absolute' }} 
                        className={isEven ? styles.ImageRigthSide : ''}>
                <MangaImage className = {styles}  src = {charactersData[currentIndex]?.character_img} inverse = {isEven ? styles.ImageRigthSide: ''}/> 
                </motion.div>
                <motion.div className= {`${styles.textContainer} posab ${currentIndex % 2 === 0 ? styles.inverseText : ''}` }
                key={currentIndex} 
                        initial={{ x: isEven ? 400 : -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: isEven ? -400 : 400, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        style={{ position: 'absolute' }} 
                >
                    <h2>{charactersData[currentIndex]?.character_smalldescription}</h2>
                </motion.div>
                <ButtonLink className = {`${styles.buttonLink} posab`}>Full Info </ButtonLink>
                <Button  className = {`${styles.buttonFavorite} posab`} onClick = {addToFavoriteCharacters}>Add To Favorite</Button>
                <button className={`${styles.NavArrow} posab ${styles.right}`}  onClick={ () =>characterSlider(currentIndex +1)}>
                    &#10095;
                </button> 
            </div>
       

        </>
    )
}