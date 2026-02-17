import TargetaUsuario from "./TargetaUsuario";

function Usuarios() {
    let usuarios = [
        { id: 1, nombre: "Juan", edad: 25, activo: true },
        { id: 2, nombre: "Ana", edad: 17, activo: true },
        { id: 3, nombre: "", edad: 30, activo: false },
        { id: 4, nombre: "Maria", edad: 19, activo: true }
    ];

    const puedeVerDetalle = (usuario) => {
        return usuario.activo && usuario.edad >= 18;
    };

    return (
        <div>
            <h1>Usuarios</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {usuarios.map((usuario) => (
                    <div key={usuario.id}>
                        <TargetaUsuario 
                            id={usuario.id}
                            nombre={usuario.nombre}
                            edad={usuario.edad}
                            activo={usuario.activo}
                        />
                        {puedeVerDetalle(usuario) && (
                            <button style={{
                                marginTop: '5px',
                                padding: '5px 10px',
                                cursor: 'pointer'
                            }}>
                                Ver detalle
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Usuarios;