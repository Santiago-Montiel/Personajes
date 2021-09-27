import { personajes } from './Personajes'


const Layout = () => {
    return (
        <>
            {personajes.map((personaje) => (
                
                <div className="card"  style={{ width: '18rem' }}>
                    
                    <div className="card-body">
                        <h4 className="card-title" >{personaje.nombre}</h4>
                        <hr />
                        <p className="card-text">{personaje.descripcion}</p>
                    </div>

                    <img src={personaje.imagen} className="card-img-top" alt="..." />
                    
                    
                </div>
                
            ))}
        </>
    )
}

export default Layout