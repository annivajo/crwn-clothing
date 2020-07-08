import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
    unsubscribeFromAuth = null;

    constructor() {
        super();

        this.state = {
            currentUser: null
        }

    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInSignUpPage}/>
                </Switch>
            </div>
        );
    }


}

export default App;
