import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <div>
            <h1 >BIBLIOTHEQUE</h1>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <Link to= "/client" className = "navbar-brand">
                            Gestion des clients
                        </Link>
                        <Link to= "/document" className = "navbar-brand">
                            Gestion des documents
                        </Link>
                        <Link to= "/emprunt" className = "navbar-brand">
                            Gestion des emprunts
                        </Link>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent
