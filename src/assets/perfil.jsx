function Perfil ({nombre, edad, ciudad}){

    return (
        <div>
            <h3>{nombre}</h3>
            <p>{`Edad: ${edad || "Edad no registrada"}`}</p>
            <p>{`Ciudad: ${ciudad || "Ciudad no registrada"}`}</p>
        </div>
    )
}
export default Perfil;