import {useRouteError} from "react-router-dom";

const Error404 = () => {

    const error = useRouteError();

    return(
        <>
        <h1>{error.status}! , {error.statusText}</h1>
        </>
    );
}

export default Error404;