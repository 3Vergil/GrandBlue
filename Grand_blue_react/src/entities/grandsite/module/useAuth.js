import { useContext, useState } from "react";
import {useAnimation} from 'motion/react'
import { useNavigate } from 'react-router';
import authApi from "@/shared/api/auth/Index";

const useAuth = ()=>{
    const [authSwitcher, setAuthSwitcher] = useState(false)
    const control = useAnimation();
    const LogInControl = useAnimation()
    const handleClick = async () => {
        if(authSwitcher){
            control.start({x: 0, transition:{type: "spring", duration: 0.5}})
            LogInControl.start({scale:0,opacity:0,transition:{type: "spring", duration: 0.5}})
            setAuthSwitcher(false)
        }
        else{
            control.start({x: -420, transition:{type: "spring", duration: 0.5}})
            LogInControl.start({scale:1,opacity:1,transition:{type: "spring", duration: 0.5}})
            setAuthSwitcher(true)
        }
    }
      const profileRedirect = useNavigate()
        const Sumbit = async (event) =>{
            event.preventDefault()
            try{
                const formData = new FormData(event.target)
                const dataObject = Object.fromEntries(formData)
                console.log(dataObject)
                if(!dataObject.name || !dataObject.password){
                    throw new Error('Fill all blank')
                }
                let data;
                if(authSwitcher){
                    data = await authApi.EnterAccount(dataObject)
                }
                else{
                    data = await authApi.createAccount(dataObject)
                }
                if(!data){
                    throw new Error("problem with data")
                }
                profileRedirect('/profile', {replace: true})
    
            }
            catch(err){
                console.error(err)
            }
        }
    return{authSwitcher, LogInControl, control, handleClick, Sumbit}
}

export default useAuth