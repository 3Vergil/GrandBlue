import { useContext } from "react"
import { MangaContext } from "@/entities/grandsite"
import Button from "@/shared/ui/Button"
import Field from "@/shared/ui/Field"
export default (props) => {
    const {className} = props
    const {Sumbit} = useContext(MangaContext)
    return(
            <form onSubmit={Sumbit}>
            <Field type = "text" id = 'name'>name</Field>
            <Field type = "password" id = 'password'>password</Field>
            <button  className= {className.button} >Log In</button>
            </form>
        )
    
}