import { Link } from "react-router"
import {motion} from 'motion/react'
import "./ButtonLink.scss"

export default (props) =>{
    const {children, link, width, className} = props
    return(
        <Link to ={`${link}`}>
            <motion.button 
            className={`Volume_button cp bn ${className}`}
            style={{'--width': width}} 
            whileHover={{scale: 1.05, y: -2}}
            whileTap={{scale:0.9,y: 1}}
            transition={{type : "spring", stiffness: 300}}
            >
                {children}</motion.button>
        </Link >
    )
}