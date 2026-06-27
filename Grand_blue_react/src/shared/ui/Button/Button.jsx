import {motion} from 'motion/react'
import "./Button.scss"

export default (props) =>{
    const {children, link, width, className, onClick, type} = props
    return(
            <motion.button 
            className={`button cp bn posab ${className}`}
            style={{'--width': width}} 
            whileHover={{scale: 1.05, y: -2}}
            whileTap={{scale:0.9,y: 1}}
            transition={{type : "spring", stiffness: 300}}
            type= {type}
            onClick={onClick}
            >
                {children}</motion.button>
    )
}