import { transformValueTypes } from "motion/react"

const URL = "http://127.0.0.1:2014/api/profile"
const header = {
    'Content-Type': 'application/json',
}
const profileApi = {
    deleteCharacterFromDB: async (id) => {
        const responce = await fetch(`${URL}/RemoveCharacters`,{
            method: "PATCH",
            headers: header,
            body: JSON.stringify({id: id}),
            credentials: 'include'
        })
        if(!responce.ok){
            return new Error("Error with data")
        }
        return responce.json()
    },
    getOne: async ()=> {
        try{
            const responce = await fetch(`${URL}/getOne`, {
                headers: header,
                 credentials: "include"})
            if(!responce.ok){
                throw new Error("Error with data")
            }
            return responce.json()
        }
        catch(err){
            console.log(err)
            return null
        }
    },
    UploadAvatar: async (Avatar) => {
        try{
            const file = new FormData()
            file.append('avatar', Avatar.files[0])
            const {'Content-Type': _, ...uploadHeaders} = header
            const response = await fetch(`${URL}/avatar`, {
            method: "POST",
            headers: uploadHeaders,
            body: file,
            credentials: 'include',
            })
            if(!response.ok){
            return new Error("Error")
            }
            return response.json()

        }
        catch(err){
            console.log(err)
        }
    },
    QuitAccount: async () => {
        try{
            const response = await fetch(`${URL}/logout`, {
            method: "POST",
            credentials: 'include',
            })
            return response.json()
        }
        catch(err){

        }
    },
    UpdateName: async (NewName) => {
        try{
            const responce = await fetch(`${URL}/updateName`, {
            method: "PATCH",
            headers: header,
            body: JSON.stringify(NewName),
            credentials: 'include',
            })
            if(!responce.ok){
                throw new Error('problem with data')
            }
            return responce.json()
        }
        catch(err){
            console.log(err)
        }
    }

}

export default profileApi