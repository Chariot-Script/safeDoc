import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Pharmacy from './Pages/Pharmacy';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Orders from './Pages/Orders';
import Favourites from './Pages/Favourites';
import Contact from './Pages/Contact';
import Ethics from './Pages/Ethics';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import { AuthProvider } from './Contexts/AuthContext';


function App() {
    return (
        <Router>
            <div className="app">
                <AuthProvider>
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/pharmacy" component={Pharmacy} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/order" component={Orders} />
                        <Route path="/favourite" component={Favourites} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/ethics" component={Ethics} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/privacy" component={Privacy} />
                    </Switch>
                </AuthProvider>
            </div>
        </Router>
    );
}

export default App;
