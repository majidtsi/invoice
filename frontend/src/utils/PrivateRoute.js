import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
/*
const PrivateRoute = ({children}) => {
    let {user} = useContext(AuthContext)
    const location = useLocation()
    if(!user){
        return <Navigate to="/login" state={{path:location.pathname}} />
    }
    return children
}
*/
const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    console.log("------user context-----")
    console.log(user)
    //return <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>
    return (
        <>
        {user ? <Outlet  /> : <Navigate to="/login" state={{...rest}} />}
        </>
    )
}
export default PrivateRoute;