
function Estado(){
    let activo = false;
    
    return(
        <div>
            {activo ?(
                <span style={{color: 'green'}}>Activo</span>
            ) : (
                <span style={{color: 'red'}}>Inactivo</span>
            )}
            
           
           
        </div>
    )
}
// los : son como un else, si activo es igual a verdadero retorna activo, si no retorna inactivo
export default Estado;