const URL = "http://127.0.0.1:2014/api/auth"
const header = {
    'Content-Type': 'application/json'
}

const authApi = {
    createAccount: async (userData) =>{
        try{
            const response = await fetch(URL, {
            method: "POST",
            headers: header,
            body: JSON.stringify(userData),
            credentials: "include"
        })
        if(!response.ok){
            throw new Error("problem with data")
        }
        return response.json()
        }
        catch(err){
            console.log(err)
        }
    },
    EnterAccount: async (userData) =>{
        try{
            const response = await fetch(`${URL}/logIn`, {
            method: "POST",
            headers: header,
            body: JSON.stringify(userData),
            credentials: "include"
            })
        if(!response.ok){
            throw new Error("problem with data")
        }
        return response.json()
        }
        catch(err){
            console.log(err)
        }
    }
}
export default authApi