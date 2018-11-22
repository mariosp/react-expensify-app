import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import LoadingPage from './components/LoadingPage'
import {login,logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import 'react-dates/lib/css/_datepicker.css';

import {firebase} from './firebase/firebase';


console.log("start app");

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    );

    let hasRendered = false;
    const renderApp = ()=>{
        if(!hasRendered){
            ReactDOM.render(jsx, document.getElementById('app'));
            hasRendered = true;
        }
    }

    ReactDOM.render(<LoadingPage />, document.getElementById('app'));


    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            console.log("log in")
            store.dispatch(login(user.uid));
            //fetching expenses of user
            store.dispatch(startSetExpenses()).then(()=>{
                renderApp();
                if(history.location.pathname ==='/'){
                    history.push('/dashboard');
                }

            });

        }else{
            store.dispatch(logout());
            console.log("log off")
            renderApp();
            history.push('/'); //loginPage if logout
        }
    })











