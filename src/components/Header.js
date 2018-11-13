import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = ()=>( 
    <header>
        <h2>Expenses app</h2>
        <NavLink activeClassName="is-active" exact={true} to='/'>Dashboard</NavLink>
        <NavLink activeClassName="is-active" to='/create'>Create expense</NavLink>
        <NavLink activeClassName="is-active" to='/help'>Help</NavLink>
    </header>

);

export default Header;