import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useStateValue } from "./StateProvider"

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const [{ user }] = useStateValue();

    return (
        <Route
            {...rest}
            render={routeProps =>
                user || user ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={'/login'} />
                )
            }
        />
    )
}

export default PrivateRoute
