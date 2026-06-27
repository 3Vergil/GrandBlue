const URL = "http://127.0.0.1:2014/api/manga"

const mangaApi = {
    getAll: () =>{
         return fetch(`${URL}/GetChapter`).then((responce) => responce.json()) 
    }
}

export default mangaApi