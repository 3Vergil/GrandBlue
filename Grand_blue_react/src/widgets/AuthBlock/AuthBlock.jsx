import Button from "@/shared/ui/ButtonLink"
import SignInForm from "@/features/sign-in"
import {motion, useAnimation} from 'motion/react'
import styles from './Auth.module.scss'
import LogInForm from "@/features/log-in"
import { useContext, useState } from "react"
import { MangaContext } from "@/entities/grandsite"


export default () => {
    const {authSwitcher, LogInControl, control, handleClick} = useContext(MangaContext)
    return(<>
    <main className= {styles.main}>
        <h1>Authorization</h1>
        <div className={`${styles.container} posrel`}>
        <div className={styles.SignIn}>
            <SignInForm className = {styles}/>
        </div>
        <motion.div 
        animate= {control}
        className= {styles.LogIn}>
            <h2>{authSwitcher ? "Create a new account":" Already have an account?"}</h2>
            <motion.button 
            className= {styles.button}
            onClick={handleClick}
            whileHover={{scale: 1.05, y: -2}}
            whileTap={{scale:0.9,y: 1}}
            transition={{type : "spring", stiffness: 300}}
            >{authSwitcher? "Sign In" :"Log In"}</motion.button>
        </motion.div>
        <motion.div 
        initial ={{opacity: 0,x:420,scale: 0}}
        animate = {LogInControl}
        className={`${styles.SignIn} posab`}>
            <LogInForm className = {styles} />
        </motion.div>
        </div>
    </main>
    </>)
}