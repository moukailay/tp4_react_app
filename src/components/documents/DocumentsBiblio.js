import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DocumentsBiblio = () => {
    return (
        
            
              
                    
                        <div>
                        <nav>
                        <Link to="/livre" className = "navbar-brand">
                            Gestion des livres
                        </Link>
                        <Link to="/cd" className = "navbar-brand">
                            Gestion des CD
                        </Link>
                        <Link to="/dvd" className = "navbar-brand">
                            Gestion des DVD
                        </Link>
                        </nav>
                        <Outlet/>
                        </div>
                   


             
         
    );
}

export default DocumentsBiblio;
