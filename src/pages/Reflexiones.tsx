import { useEffect, useState } from "react";
import { getAllReflexiones } from "../lib/db"
import type { Reflexion } from "../lib/db";
import AddEditReflexion from "../elements/AddEditReflexion"


export default function Reflexiones() {
   const [reflexiones, setReflexiones] = useState<Reflexion[]>([]);
   const [fecha, setFecha] = useState<string>("");
   const [mostrarForm, setMostrarForm] = useState<boolean>(false);

   const cargarReflexiones = async () => {//Función para cargar todas las reflexiones.
      const reflexiones = await getAllReflexiones();
      setReflexiones(reflexiones);
   }

   useEffect(() => {//Para que no pete cuando se añadan reflexiones nuevas.
      cargarReflexiones();
   }, [reflexiones]);

   function activarEditar(fecha?: string) {//
      if (fecha !== undefined) {
         setFecha(fecha);
      }
      setMostrarForm(true);
   }
   const desactivarEditar = () => {
      setMostrarForm(false);
      setFecha("");
   };
   return (
      <>
         <h1>Reflexiones:</h1>
         <button onClick={() => activarEditar()}>➕</button>
         <div>
            {reflexiones.map((reflex) => (
               <details>
                  <summary key={reflex.fecha}>{reflex.fecha}</summary>
                  <h5>¿Qué me ayudó hoy?</h5>
                  <p>{reflex.queAyudo}</p>
                  <h5>¿Hubo algún momento difícil? ¿Por qué?</h5>
                  <p>{reflex.momentoDificil}</p>
                  <h5>¿Qué quiero probar mañana?</h5>
                  <p>{reflex.queProbar}</p>
                  <button onClick={() => activarEditar(reflex.fecha)}>
                     Editar
                  </button>
               </details>
            ))}
         </div>
         {/*Ya vemos el form para añadir reflexión,
         falta añadir botón para editar/borrar */}
         {mostrarForm && <AddEditReflexion
            onClose={desactivarEditar}
            fecha={fecha}
         />}
      </>
   );
}