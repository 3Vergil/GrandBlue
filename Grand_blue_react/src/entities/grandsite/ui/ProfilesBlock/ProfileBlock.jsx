import MangaImage from "@/shared/ui/Image"
import Field from "@/shared/ui/Field"
import UpdateName from "@/features/update-name"
import styles from './ProfileBlock.module.scss'
import { useContext } from "react"
import { MangaContext } from "@/entities/grandsite"
import Button from "@/shared/ui/Button/Button"

export default (props) => {
    const {} = props
    const {userData, isLoading,fileInputRef, handleDragOver, handleDrop, QuitAccount, UpdateName } = useContext(MangaContext)
        return (
        <>
        <div className= {styles.UserInformation}>
            <label className= {`${styles.DropArea}`}  htmlFor='UpdateAvatar' onDrop={handleDrop} onDragOver={handleDragOver}>
                <input type='file'  id='UpdateAvatar' name='UpdateAvatar' accept= 'accept' ref={fileInputRef} hidden/>
                {userData?.avatar_path ? 
                <MangaImage  className = {styles} src ={`http://127.0.0.1:2014/${userData.avatar_path}`}/> : 
                <div className={styles.AvatarPlaceholder}>Loading Avatar...</div>}
            </label>
            <div className={`${styles.container} posrel`}>
                <h1 >{userData?.name}</h1>
                <form onSubmit={UpdateName}>
                    <Field id = 'NewName' type = "text" >New Name:</Field>
                    <Button width = {100} className = {styles.Update} type="sumbit" >Update Name</Button>
                </form>
                <Button className = {styles.Quit} width = {120} onClick ={QuitAccount}>Quit from Account</Button>
            </div>
        </div>
        </>
    )
   
}