function Notificaciones(){
    let mostrarNotificaciones = true;
    let notificaciones = [
        { id: 1, texto:"Mensaje 1: Tienes que revisar tu correo"},
        { id: 2, texto:"Mensaje 2: Tu pedido ha sido enviado"}
    ];
    return(
        <div>
            <h2>Notificaciones</h2>
            {mostrarNotificaciones && notificaciones.length > 0 ?(
                <ul>
                    {notificaciones.map(noti =>(
                        <li key={noti.id}>{noti.texto}</li>
                    ))}
                </ul>
            ): (
                <p>No hay notificaciones</p>
            )}
        </div>
    );
}

export default Notificaciones; 