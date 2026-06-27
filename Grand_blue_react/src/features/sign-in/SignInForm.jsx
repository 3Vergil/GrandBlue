import { useContext, useState } from "react";
import Button from "@/shared/ui/Button"
import Field from "@/shared/ui/Field"
import { MangaContext } from "@/entities/grandsite"


export default (props) =>{
    const {className} = props
    const {Sumbit} = useContext(MangaContext)
    return(
        
            <form onSubmit={Sumbit}>
            <Field  type = "text" id = 'name'>name</Field>
            <Field  type = "password" id = 'password'>password</Field>
            <button className= {className.button} type="sumbit">Sign In</button>
            </form>

    )
}