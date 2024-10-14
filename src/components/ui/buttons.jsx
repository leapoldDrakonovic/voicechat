const defaultClassNames = ""


export const Button = ({children, ...props}) => {
    return (
        <button  className="" {...props} >
            {children}
        </button>
    )
}


export const SubmitButton = ({children, isPending, ...props}) => {
    return (
        <button className="hover:bg-purple-400 hover:text-white easy-linear duration-200 rounded-md text-center p-2 font-bold" {...props} >
            {isPending ? isPending : children}
        </button>
    )
}