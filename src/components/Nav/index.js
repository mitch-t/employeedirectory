import React from 'react';
import SearchName from "../SearchForm";


import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <SearchName />
    </div>
</nav>
    );
}
export default Nav;