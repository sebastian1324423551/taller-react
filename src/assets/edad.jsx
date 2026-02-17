import { useState } from "react";

function Edad(){
    const [año1, setaño1] = useState('');
    const [año2, setaño2] = useState('');
    const [año3, setaño3] = useState('');     
    
    const calcularEdad = (año) => {
        return 2026 - año;   
    };

    const cardStyle = {
        tetxtAlign: 'center',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        backgroundColor: '#8CB51D',
        boxShadow: '0 2px 5px rgba(237, 22, 22, 0.1)',
    }
   
    return (
        <div style={cardStyle}>
            <label>
            ¿Fecha dde nacimiento de la persona 1?
            <input 
                type="number"
                value={año1}
                onChange={(e) =>setaño1(e.target.value)}
                
            />  Edad: {año1 && calcularEdad(Number(año1))}     
            </label>

            <label>
                ¿Fecha de nacimiento de la persona 2?
                <input 
                type="number"
                value={año2}
                onChange={(e) =>setaño2(e.target.value)}
                
            />  Edad: {año2 && calcularEdad(Number(año2))} 
            </label>

            <label>
                ¿Fecha de nacimiento de la persona 3?
                <input 
                type="number"
                value={año3}
                onChange={(e) =>setaño3(e.target.value)}
                
            />  Edad: {año3 && calcularEdad(Number(año3))}
            </label>
        </div>
        
       
    )
}

export default Edad;