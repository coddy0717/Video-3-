import { useState } from "react"

const Navbar = () => {
        const [user, setUser] = useState(null)

        const login = () => {
        setUser({id:1,nombre: "Brsk91"})
        }

        const logout = () => {
            setUser(null)
            }

    return (
        <nav className="navbar navbar-light bg-dark bg-gradient">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 fs-4 text-white">User:{user? user.nombre: "No autentificado"}</span>
              {user 
              ? (
                <button 
                type="button" 
                className="btn btn-outline-warning"
                onClick = {logout}
                >Cerrar Sesion
                </button>)
              :(<button 
                type="button" 
                className="btn btn-outline-warning"
                onClick = {login}
                >Iniciar Sesion
                </button>)              
                }               
            </div>
        </nav>
    )
}

export default Navbar
