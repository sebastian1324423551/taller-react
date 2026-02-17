function Arreglos() {
    let productos = [
        { id: 1, nombre: "Arroz", precio: 2000, stock: 10 },
        { id: 2, nombre: "Frijoles", precio: 2500, stock: 5 },
        { id: 3, nombre: "Aceite", precio: 5000, stock: 0 }
    ];


    return (
        <div>
            <h1>Productos</h1>
            <div>
                
                {
                    productos.map((producto) => ( // la varible producto podria llamarse de cualquier otra forma ya que solo exite en el map y no esta definida
                        <div 
                            key={producto.id} 
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                padding: '10px',
                                width: '150px'
                            }}
                        >
                            <h3>{producto.nombre}</h3>
                            <p>ID: {producto.id}</p>
                            <p> ${producto.precio}</p>

                            {producto.stock > 0 ?(
                                <span style={{color: 'green'}}>Disponible</span>
                            ) : (
                                <span style={{color: 'red'}} >No disponible</span>
                            
                            )} 

                        </div>
                    ))
                }
            </div>
        </div>
          
                
           
       
    );
}

export default Arreglos;