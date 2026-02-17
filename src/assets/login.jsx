function Login(){
    let logueado = false;
    let rol = "admin";
    return(
        <div>
            {!logueado ?(     // el ! es para negar, si logueado es falso, entonces muestra el boton de iniciar sesion
                <button style={{color: "green", backgroundColor: "lightgreen"}}>Iniciar Sesion</button>
            ): rol === "admin"? (
                <p>Panel Admin</p>
            ): (
                <p>Panel Usuario</p>
            
            )}
        </div>
    );

}
export default Login;
