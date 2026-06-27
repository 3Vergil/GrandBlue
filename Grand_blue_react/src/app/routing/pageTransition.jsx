import {motion} from "motion/react"
;
export default ({children}) => {
  return (
    <motion.main
    initial = {{opacity: 0, y: 50}}
    animate = {{opacity: 1, y: 0}}
    exit = {{opacity: 0, y: -50}}
    transition= {{duration: 0.6, ease: ["easeIn", "easeOut"]}}
    >
            {children}
        </motion.main>
    )
}