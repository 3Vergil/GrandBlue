const URL = "http://127.0.0.1:2014/api/music"

const musicApi = {
    getMusics: async () => {
        const responce = await fetch(`${URL}/getMusic`, {credentials: "include"})
        return responce.json()
    }
}

export default musicApi