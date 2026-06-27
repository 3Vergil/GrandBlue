import { memo, useContext, useEffect, useRef} from "react"
import { data, Link, useParams } from "react-router"
import { MangaContext } from "@/entities/grandsite"
import * as pdfjsLib from "pdfjs-dist";
import { useState } from "react"
import chapterApi from "@/shared/api/chapter"
import styles from './ChapterBlock.module.scss'
import PdfLoader from "../../features/pdf-loader";
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url
).href;
const ChapterBlock = ()=> {
   let {id} = useParams()
   const {userData} = useContext(MangaContext)
   const [chapterPath, setChapterPath] = useState(null)
   const [loading, setLoading] = useState(true)
   const [pdfDoc, setPdfDoc] = useState(null);
   const [totalPages, setTotalPages] = useState([]);
   const [activePage, setActivePage] = useState(1);
   useEffect(()=> {
      if(!id || id === 'undefined') return;
      chapterApi.getChapterById(id).then((data) =>{
         setChapterPath(data)
         setLoading(false)
      }).catch((error) => {
         console.log(error)
         setLoading(false)
      })
   }, [id])
   useEffect(() => {
   if (!chapterPath || !chapterPath.path) return;

   const RenderAllPages = async () => {
      try {
         const fileTargetUrl = `http://127.0.0.1:2014/${chapterPath.path}`;
         const loader = pdfjsLib.getDocument({
            url: fileTargetUrl,
           withCredentials:'include'
         });
         const doc = await loader.promise; 
         setPdfDoc(doc);

         const pagesArray = Array.from({ length: doc.numPages }, (_, i) => i + 1);
         setTotalPages(pagesArray);
         setLoading(false);
         if(id === userData?.chapterId){
            setTimeout(() => {
               const targetPage = document.getElementById(`mangaPage${userData?.Page}`)
               if(targetPage){
                
                  targetPage.scrollIntoView({
                     behavior: 'smooth',
                     block: 'start'
                  })
               }
            },100)
         }
      } catch (err) {
         console.error( err);
         setLoading(false);
      }
   };

   RenderAllPages();
}, [chapterPath]);

   const PageVisibiltyChange = async (pageNum) => {
      if(pageNum === activePage) return;
      setActivePage(pageNum)
      await chapterApi.CurrentReadingChapter(pageNum, id)
   }
   if(loading){
      return (<div>Loading chapter content...</div>)
   }
   return(
        <div className={`${styles.container} posrel mt`}>
            <h1>Now you Reading chapter{id}</h1>
            {id == 1 ? '' : 
            <Link to={`/chapter/${Number(id) -1 }`}>
            <button className= {`${styles.NavArrow} posab ${styles.left}`}>
                &#10094;
            </button>
            </Link>
            }
            <div className= {styles.Chapter}>
               {totalPages.map((pageNumber) => {
                  return(
                     <PdfLoader 
                     key={pageNumber}
                     pdfDoc = {pdfDoc}
                     pageNum = {pageNumber}
                     onVisible = {PageVisibiltyChange}
                  />
                  )
               })}
            </div>
           
            <Link to={`/chapter/${Number(id) +1 }`}>
            <button className={`${styles.NavArrow} posab ${styles.right}`}>
                &#10095;
            </button>  
            </Link>
                
         </div>)
}

export default memo(ChapterBlock)