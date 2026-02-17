function TargetaUsuario({ id, nombre, edad, activo}){
    return (
        <div>
            <h3>{nombre || "Nombre no disponible"}</h3>
            <p>ID: {id}</p>
            <p>Edad: {edad}</p>
            <p>Estado: {activo ? "Activo" : "Inactivo"}</p>

        </div>
        
    );
}
export default TargetaUsuario;