import * as pdfjsLib from "pdfjs-dist";
import { useEffect, useRef } from "react"

export default ({ pdfDoc, pageNum, onVisible })=> {
   
        const canvasRef = useRef(null)
        const rowref = useRef(null)
         useEffect(() => {
            const loadPdf = async () => {
               const page = await pdfDoc.getPage(pageNum)
               const canvas = canvasRef.current
               const ctx = canvas.getContext('2d')

               const viewport = page.getViewport({ scale: 0.5 });
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                     canvasContext: ctx,
                     viewport: viewport
                } 

                await page.render(renderContext).promise
            }
            loadPdf()
         }, [ pdfDoc,pageNum])

          useEffect(()=>{
            const PageObserver = new IntersectionObserver(
                ([entry])=> {
                    if(entry.isIntersecting){
                        onVisible(pageNum)
                    }
                }, {threshold: 0.5})
            if(rowref.current) PageObserver.observe(rowref.current);

            return () => PageObserver.disconnect()
        }, [pageNum, onVisible])

        return(
            <>  <div ref={rowref} id={`mangaPage${pageNum}`}>
                <canvas ref= {canvasRef}></canvas>
                </div>
            </>
        )
   }

