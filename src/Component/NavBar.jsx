import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link to='/all'>All</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link to='/career'>Career</Link>
       <Link to='/datascience'>DataScience</Link>
       <Link to='/cyper'>CyperSecurity</Link>
       <Link to='/fullstack'>FullStackDeveloper</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;