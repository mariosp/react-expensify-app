import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'


const Header = (props)=>( 
    <header>
        <h2>Expenses app</h2>
        <NavLink activeClassName="is-active" to='/dashboard'>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to='/create'>Create expense</NavLink>
        <NavLink activeClassName="is-active" to='/help'>Help</NavLink>
        <button onClick={props.startLogout}>Logout</button>
        </header>

);


const mapDispatchToProps = (dispatch) =>({
    startLogout : () => dispatch(startLogout())
})


export default connect(undefined,mapDispatchToProps)(Header);