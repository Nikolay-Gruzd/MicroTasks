import {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {PATH} from "./router.tsx";

type Props = {
    children: ReactNode
};

export const ProtectedRoute = (props: Props) => {
    const { children } = props;
    const logged = true
    return (
        <div>
            {logged ? children : <Navigate to={PATH.ERROR}/>}
        </div>
    );
};