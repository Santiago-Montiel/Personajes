
const Header = ({ nombre }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
               <h1> <a className="navbar-brand" >{nombre}</a> </h1>
               <a className="navbar-brand" href="#">Estudiantes</a>
               <a className="navbar-brand" href="#">Personajes</a>
                
            </div>
        </nav>
    )
}

export default Header;