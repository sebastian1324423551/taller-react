import Inicio from './assets/inicio'
import Edad from './assets/edad'
import Estado from './assets/Estado'
import Arreglos from './assets/productos'
import Props from './assets/props'
import Propspadre from './assets/propspadre'
import Perfil from './assets/perfil'
import Login from './assets/login'
import Notificaciones from './assets/Notificaciones'
import Usuarios from './assets/Usuarios'


function App() {
  return (
    <div>
      <Inicio></Inicio>
      <Edad></Edad>
      <Estado></Estado>
      <Arreglos></Arreglos>
      <Propspadre></Propspadre>
      <Perfil nombre="Maria" edad={30} ciudad="Bogota"/>
      <Perfil nombre="Ana" edad="" ciudad=""/>
      <Login></Login>
      <Notificaciones></Notificaciones>
      <Usuarios></Usuarios>
    </div>
  )
}
export default App
