import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () => (

    <header>
    <h1>Expensify app v11</h1>
    <NavLink to='/' exact={true} activeClassName='is-active' >Home</NavLink>
    <NavLink to='/create' activeClassName='is-active' >create</NavLink>
    <NavLink to='/edit'activeClassName='is-active' >edit</NavLink>
    </header>
)

export default Header