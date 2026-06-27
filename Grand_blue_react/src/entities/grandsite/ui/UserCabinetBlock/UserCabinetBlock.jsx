

export default (props)=> {
    const {children, className} = props
    return(
        <div className={className}>
            <h1>{children}</h1>
        </div>
    )
}