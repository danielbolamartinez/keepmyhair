import type { Reflexion } from "../lib/db"
import { useState } from "react";


export default function oneReflexion({ fecha, queAyudo, momentoDificil, queProbar }: Reflexion) {
    const [mostrarReflexión, setMostrarReflexion] = useState<boolean>(false);
    
    return (
        <>
            <button onClick={()=>setMostrarReflexion(!mostrarReflexión)}>
                <p>{fecha}</p>
            </button>
        </>
    )
}