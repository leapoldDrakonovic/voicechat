
import {PropagateLoader} from "react-spinners"


export const LoadingWindow = () => {
    return (
        <div className="w-full h-screen overflow-hidden flex flex-col justify-center items-center">
            <PropagateLoader />
        </div>
    )
}