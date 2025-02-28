import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage =()=>{
    
    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1);// will navigate one step previous
    }
    const error = useRouteError();
    console.log(error);
    
    return (
        <div>
        <h1>Oops! An Error occurred.</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/"> <button> Go Home </button> </NavLink>
        <NavLink><button className="btn" onClick={handleGoBack} >Go Back </button></NavLink>
        </div>
    )
}