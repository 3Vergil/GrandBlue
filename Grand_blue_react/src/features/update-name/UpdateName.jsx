import Field from "@/shared/ui/Field"

export default (props)=> {
    const {className} = props

    return(
        <form >
            <Field id = 'UpdateName' type = "text"  className = {className}/>
            <button>Update Name</button>
        </form>
    )
}