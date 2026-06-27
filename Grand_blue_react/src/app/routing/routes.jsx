import { MangaProvider } from "@/entities/grandsite"
import { Route, Routes, useLocation } from "react-router"
import Manga from '@/pages/MangaPage'
import Home from "@/pages/HomePage"
import Music from "@/pages/MusicPage"
import Wiki from "@/pages/WikiPage"
import ErrorPage from "@/pages/ErrorPage"
import { AnimatePresence } from "motion/react"
import PageTransition from "./pageTransition.jsx"
import AuthPage from "@/pages/AuthPage"
import ProfilePage from "@/pages/ProfilePage"
import ChapterPage from "@/pages/ChapterPage"

export default ()=> {
    const location = useLocation()
    return(
        <AnimatePresence mode="wait" >
        <Routes location={location} key={location.pathname}>       
            <Route path="/" element = {<PageTransition><Home /></PageTransition>}/>
            <Route path="/music" element = {<PageTransition><Music /></PageTransition>}/>
            <Route path="/wiki" element = {<PageTransition><Wiki /></PageTransition>}/>
            <Route path="/manga" element = {<PageTransition><Manga /></PageTransition>} />
            <Route path="/chapter/:id" element = {<PageTransition><ChapterPage/></PageTransition>}/>
            <Route />
            <Route path="/Auth" element = {<PageTransition><AuthPage /></PageTransition>} />
            <Route path="/profile" element = {<PageTransition><ProfilePage /></PageTransition>} />
            <Route path="/*" element = {<PageTransition><ErrorPage /></PageTransition>} />
          </Routes>
          </AnimatePresence>
    )
}