import { useEffect, useState } from "react"
import "../assets/registro.css"
import { getAllRegistros/*, deleteRegistro*/ } from "../lib/db"
import AddEditRegistro from "../elements/AddEditRegistro"
import type { Registro } from "../lib/db"

//Objetos y funciones




export default function Registro() {//Tabla principal
    const [registros, setRegistros] = useState<Registro[]>([]);
    const [mostrarForm, setMostrarForm] = useState<boolean>(false);
    const [id, setId] = useState<number|null>(null);

    const cargarSituaciones = async () => {//Función para cargar todas las situaciones.
        const registros = await getAllRegistros();
        setRegistros(registros);
    }

    function activarEditar(id?:number) {//Función para editar todas las situaciones.
        if(id!==undefined){setId(id);}
        setMostrarForm(true);
    }
    const desactivarEditar = () => {
        setMostrarForm(false);
        setId(null);
    };

    useEffect(() => {//Evitar que se bloquee cuando cargue una nueva situación
        cargarSituaciones();
    }, [registros]);

    //Lo que se va a ver.
    return (
        <>
            <div>
                <h1>Registros:</h1>
                <button onClick={()=>activarEditar()}>➕</button>
            </div>
            {/*A partir de aquí: Para ponerlo en formato tarjeta*/}
            <div className="thinkGrid">
                {registros.map((r) => (
                    <button key={r.id} className="thinkCard" onClick={()=>activarEditar(r.id)}>
                        <p>Lugar: <strong>{r.lugar}</strong></p>
                        <p>Emoción: <strong>{r.emocion}</strong></p>
                        <p>Impulso: <strong>{r.impulso}</strong></p>
                        <p>Arrancó: <strong>{r.arranque ? 'Sí' : 'No'}</strong></p>
                        <p>Estrategia: <strong>{r.estrategia}</strong></p>
                        <p>Pensamiento: <strong>{r.pensamiento}</strong></p>
                        <p>Impulso: <strong>{r.impulso}</strong></p>
                    </button>
                ))}
            </div>
            {mostrarForm && <AddEditRegistro                
                onClose={desactivarEditar}
                id={id}
            />}

        </>
    )
}

