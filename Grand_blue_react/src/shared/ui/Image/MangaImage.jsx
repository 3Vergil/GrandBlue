import {animate, motion} from 'motion/react'

export default (props)=> {
    const {className, src, alt, inverse} = props
    return(
        <div className={`${className.Body} ${inverse}`} >
            <img className={`${className.Image}`} src = {src}  alt= {alt}/>
        </div>
    )
}