import { addReflexion, editReflexion, getReflexion, deleteReflexion } from "../lib/db"
import { useEffect, useState } from "react"
import type { Reflexion } from "../lib/db";

type AddEditProps = {
    //fecha?: string | null;
    onClose: () => void;
}

export default function AddEditReflexion({ /*fecha,*/ onClose }: AddEditProps) {//Con esta función nos muestra formulario para crear una situación nueva    
    const [formData, setFormData] = useState<Reflexion>({//Formulario en blanco, si se cambia algo cambiamos estos parametros.
        fecha: "",
        queAyudo: "",
        momentoDificil: "",
        queProbar: ""
    });
    /*fecha ? useEffect(() => {
        const fetchReflexion = async () => {
            {
                const Reflexion = await getReflexion(fecha);
                if (Reflexion != undefined) { setFormData(Reflexion); }
            }
        };
        fetchReflexion();
    }, [fecha]) : null;*/

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {//Función para manejar los cambios en el formulario
        const { name, value } = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    function handleSubmit(e: React.FormEvent) {//Función para hacer los cambios en la base de datos.
        e.preventDefault();
        const formatter = new Intl.DateTimeFormat('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
        formData.fecha = formatter.format(Date.now());

        //if (fecha !== "") { editReflexion(formData) }
        addReflexion(formData);
        setFormData({//Una vez guardado el formData lo volvemos a poner en blanco
            fecha: "",
            queAyudo: "",
            momentoDificil: "",
            queProbar: ""
        });

        onClose();
    }

    function borrarReflexion() {
        if (formData.fecha !== undefined) {
            console.log(`El id es ${formData.fecha}`);
            deleteReflexion(formData.fecha);
        } else {
            console.warn("No hay Fecha para borrar el Reflexion");
        }
    }

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <h3>Añadir reflexión: </h3>
                        <label htmlFor="queAyudo">¿Qué me ayudó hoy?</label>
                        <input type="text" name="queAyudo" value={formData.queAyudo} onChange={handleChange} />
                        <label htmlFor="momentoDificil">¿Hubo algún momento difícil? ¿Por qué?</label>
                        <input type="text" name="momentoDificil" value={formData.momentoDificil} onChange={handleChange} />
                        <label htmlFor="queProbar">¿Qué quiero probar mañana?</label>
                        <input type="text" name="queProbar" value={formData.queProbar} onChange={handleChange} />
                        <div>
                            <button /*className="modal-add"*/ type="submit">Aceptar</button>
                            {/*fecha && (
                                <button type="button" onClick={() => {
                                    borrarReflexion();
                                    onClose();
                                }}>
                                    Borrar
                                </button>
                            )*/}
                            <button /*className="modal-close"*/ onClick={onClose}>Cancelar</button>
                        </div>
                    </form >
                </div>
            </div>
        </>
    );
}
