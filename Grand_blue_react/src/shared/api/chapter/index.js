const URL = "http://127.0.0.1:2014/api/manga/chapter"
const header = {
    'Content-Type': 'application/json'
}
import { reactHooks } from 'eslint-plugin-react-hooks';

const chapterApi = {
    getChapterById: async (id) => {
        const responce = await fetch(`${URL}/getChapter/${id}`, {credentials: 'include'})
        return responce.json()
    },
    CurrentReadingChapter: async (pageNum,id) => {
        const responce = await fetch(`${URL}/currentReading`,{
            method: 'PUT',
            headers: header,
            body: JSON.stringify({Page: pageNum, ChId: id}),
            credentials: 'include'
        })
        return responce.json()
    }
}

export default chapterApi