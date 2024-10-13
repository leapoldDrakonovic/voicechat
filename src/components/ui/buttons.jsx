
export const Button = ({children, ...props}) => {
    return (
        <button  className="" {...props} >
            {children}
        </button>
    )
}


export const SubmitButton = ({children, isPending, ...props}) => {
    return (
        <button className="" {...props} >
            {isPending ? isPending : children}
        </button>
    )
}