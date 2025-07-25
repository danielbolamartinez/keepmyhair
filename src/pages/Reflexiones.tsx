import { useEffect, useState } from "react";
import { getAllReflexiones, deleteReflexion } from "../lib/db"
import type { Reflexion } from "../lib/db";
import AddEditReflexion from "../elements/AddEditReflexion"
import "../assets/reflexion.css"

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
         <div className="reflexionCards">
            {reflexiones.map((reflex) => (
               <details key={reflex.fecha}>
                  <summary>{reflex.fecha}</summary>
                  <div>
                     <h4>¿Qué me ayudó hoy?</h4>
                     <p>{reflex.queAyudo}</p>
                  </div>
                  <div>
                     <h4>¿Hubo algún momento difícil? ¿Por qué?</h4>
                     <p>{reflex.momentoDificil}</p>
                  </div>
                  <div>
                     <h4>¿Qué quiero probar mañana?</h4>
                     <p>{reflex.queProbar}</p>
                  </div>
                  <div>
                     <button onClick={() => activarEditar(reflex.fecha)}>
                        Editar
                     </button>
                     <button onClick={() => deleteReflexion(reflex.fecha)}>
                        Borrar
                     </button>
                  </div>
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