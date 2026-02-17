import Props from './props'; //importar el componente hijo
function Propspadre(){
    return(
        <div>
            <h2>Componente padre</h2>
            <Props mensaje="Hola" nombre="Jose"/>
            <Props mensaje="Biemvenido" nombre="Ana"/>
            <Props mensaje="Saludos" nombre="Maria"/>
        </div>
    )
}
export default Propspadre;