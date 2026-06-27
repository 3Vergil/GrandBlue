import profileApi from  '@/shared/api/profile/Index';
import { useEffect, useReducer, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const userDataReducer = (state, action) => {
    switch(action.type){
        case "SET_ALL": {
            return action.userData.constructor === Object ? action.userData : state
        }
        case "UPDATE_AVATAR": {
            return {
                ...state,
                avatar_path: action.payLoad
            }
        }
        case "UPDATE_NAME": {
            return{
                ...state,
                name: action.payLoad
            }
        }
        case "DELETE_FAVCHAR": {
            return state.favorite_characters.filter((char) => {
                return char.id !== action.id
            })
        }
        case "QUIT": {
            return {}
        }
        default:{
            return state
        }
    }
}

const useProfile = () => {
    const [userData, dispatch] = useReducer(userDataReducer, {})
    const UpdateData = async ()=>{
        try{
            const data = await profileApi.getOne()
            if(!data ){
                throw new Error('problem with data')
            }
            dispatch({type: "SET_ALL", userData: data})
        }
        catch(err){
            console.error(err)
        }
}
    useEffect( () => {
        UpdateData()
    },[])

    const fileInputRef = useRef(null)
    const handleDragOver = (event)=>{
        event.preventDefault()
    }
    const handleDrop = async (event)=>{
        event.preventDefault()
        try{
            if(!event.dataTransfer.files || event.dataTransfer.files.length === 0){
            console.error("Файл не выбран");
            return;
            }
            fileInputRef.current.files = event.dataTransfer.files
            const data = await profileApi.UploadAvatar(fileInputRef.current)
            dispatch({type: 'UPDATE_AVATAR', payLoad: data.avatar_path})
            UpdateData()
        }
        catch(Err){
            console.log(Err)
        }
    }

    const profileRedirect = useNavigate()
    const QuitAccount = async ()=> {
        dispatch({type: "QUIT"})
        await profileApi.QuitAccount()
        profileRedirect('/Auth', {replace: true})
    }
    const UpdateName = async (event) =>{
                event.preventDefault()
                try{
                    const formData = new FormData(event.target)
                    const dataObject = Object.fromEntries(formData)
                    if(!dataObject.NewName){
                        throw new Error('Fill all blank')
                    }
                    console.log(dataObject)
                    dispatch({type: "UPDATE_NAME", payLoad:  dataObject.NewName})
                    const data = await profileApi.UpdateName(dataObject);
                   
                }
                catch(err){
                    console.error(err)
                }
            }
    
    const RemoveCharacter = async (charId) => {
        try{
            dispatch({type: "DELETE_FAVCHAR", id: charId})
            await profileApi.deleteCharacterFromDB(charId)
        }
        catch(err){
            console.log(err)
        }
    }

    return {userData, fileInputRef, handleDragOver, handleDrop, QuitAccount, UpdateName ,RemoveCharacter}
}

export default useProfile