import { useEffect, useState } from "react";
import { getAllReflexiones } from "../lib/db"
import type { Reflexion } from "../lib/db";
import AddEditReflexion from "../elements/AddEditReflexion"


export default function Reflexiones() {
   const [reflexiones, setReflexiones] = useState<Reflexion[]>([]);
   //const [fecha, setFecha] = useState<string>("");
   const [mostrarForm, setMostrarForm] = useState<boolean>(false);

   const cargarReflexiones = async () => {//Función para cargar todas las reflexiones.
      const reflexiones = await getAllReflexiones();
      setReflexiones(reflexiones);
   }

   useEffect(() => {//Para que no pete cuando se añadan reflexiones nuevas.
      cargarReflexiones();
   }, [reflexiones]);

   function activarEditar(/*fecha?: string*/) {//
      /*if (fecha !== undefined) {
         setFecha(fecha);         
      }*/
      setMostrarForm(true);
   }
   const desactivarEditar = () => {
      setMostrarForm(false);
      /*setFecha("");*/
   };
   return (
      <>
         <h1>Reflexiones:</h1>
         <button onClick={() => activarEditar()}>➕</button>
         <div>
            {reflexiones.map((reflex) => (
               <button /*onClick={mostrarReflexion}*/ key={reflex.fecha}>
                  <p>{reflex.fecha}</p>
               </button>
            ))}
         </div>
         {mostrarForm && <AddEditReflexion
            onClose={desactivarEditar}
            //fecha={fecha}
         />}
      </>
   );
}