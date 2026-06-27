import styles from "./Field.module.scss"

export default (props) =>{
    const {children, id, type = '', accept, className} = props

    return(
        <div className= {`${styles.container} posrel `}>
            <label className={`${styles.label} posab`} htmlFor={id}>{children}</label>
            <input type={type} className={`${styles.input}`} id={id} name={id} accept= {accept}/>
        </div>
    )
}