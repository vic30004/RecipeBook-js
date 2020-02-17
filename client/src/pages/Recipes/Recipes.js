import React, {Fragment} from 'react'
import './Recipes.css'
import Logo from '../../images/Logo.png'
import SearchBar from '../../components/SearchBar/SearchBar'
import Nav from '../../components/nav/Nav'
export const Recipes = () => {
    return (
        <Fragment>
        <Nav/>
        <div id="recipeSearch">
        
            <header className="search-container">
            <img src={Logo} alt='Logo'/>
            <SearchBar/>
            <button className="searchBtn">Search</button>
            </header>
        </div>

        </Fragment>
    )
}

export default Recipes