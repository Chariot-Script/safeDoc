import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Pharmacy from './Pages/Pharmacy'
import Doctor from './Pages/Doctor'
import AddProducts from './Pages/AddProducts'
import AddDoctors from './Pages/AddDoctors'
import Clients from './Pages/Clients'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import EditProfile from './Pages/EditProfile'
import Orders from './Pages/Orders'
import Checkout from './Pages/Checkout'
import Payments from './Pages/Payments'
import Contact from './Pages/Contact'
import Ethics from './Pages/Ethics'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import { auth } from './Sevices/Firebase'
import { useStateValue } from "./Contexts/StateProvider"


function App() {
    const [ { user }, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log("[The user is >>>] ", authUser);
            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, [dispatch]);

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/pharmacy" component={Pharmacy} />
                    <Route path="/request/doctor" component={Doctor} />
                    <Route path="/add/products" component={AddProducts} />
                    <Route path="/add/doctors" component={AddDoctors} />
                    <Route path="/clients/requests" component={Clients} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/edit/profile" component={EditProfile} />
                    <Route path="/order" component={Orders} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/payment" component={Payments} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/ethics" component={Ethics} />
                    <Route path="/terms" component={Terms} />
                    <Route path="/privacy" component={Privacy} />
                </Switch>
            </div>
        </Router>

    );
}

export default App;
