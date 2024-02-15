import {useRouterError} from "react-router-dom"

const Error = () => {
    const err = useRouterError();
    return (
        <div>
            <h1>Ooops !!!</h1>
            <h2>Something Went Wrong</h2>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}