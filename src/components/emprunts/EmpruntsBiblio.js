import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const EmpruntsBiblio = () => {
    return (
        <div>
            <nav>
                <Link to="/empruntLivre" className="navbar-brand">
                    Emprunts des livres
                </Link>
                <Link to="/empruntCd" className="navbar-brand">
                    Emprunts des CD
                </Link>
                <Link to="/empruntDvd" className="navbar-brand">
                    Emprunts des DVD
                </Link>
            </nav>
            <Outlet/>
        </div>


    );
}

export default EmpruntsBiblio;
