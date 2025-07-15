import { editRegistro, getRegistro } from "../lib/db"
import { useEffect, useState } from "react"
import type { Registro } from "../lib/db";

export default function EditRegistro(id:number) {//Con esta función nos muestra formulario para crear una situación nueva
    const [onOffAdd, setOnOffAdd] = useState<boolean>(false);//Con este mostramos el modal.
    const [formData, setFormData] = useState<Registro>({
        id: id,
        lugar: "",
        emocion: "",
        impulso: "",
        arranque: false,
        estrategia: "",
        pensamiento: "",
    });      
    
    useEffect(() =>{
        const fetchRegistro = async () => {
             const registro = await getRegistro(id);
             if(registro != undefined){setFormData(registro);}
        };
        fetchRegistro();
    }, []);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {//Función para manejar los cambios en el formulario
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    
    function handleSubmit(e: React.FormEvent) {//Función para hacer los cambios en la base de datos.
        e.preventDefault();
        editRegistro(formData);        
        setOnOffAdd(false);
    }
    // hasta aquí corregido

    return (
    <>
        {!onOffAdd ? <button onClick={() => setOnOffAdd(true)}> ➕</button> : null}
        
            <form onSubmit={handleSubmit}>
                <h3>Añadir situación: </h3>
                <input type="text" name="lugar" value={formData.lugar} onChange={handleChange} required />
                <input type="text" name="emocion" value={formData.emocion} onChange={handleChange} placeholder="Emoción/Acción" />
                <input type="text" name="estrategia" value={formData.estrategia} onChange={handleChange} placeholder="Estrategia" />
                <input type="text" name="pensamiento" value={formData.pensamiento} onChange={handleChange} placeholder="Pensamiento" />
                <div>
                    <label htmlFor="impulso">Impulso: &nbsp;
                        <select name="impulso" value={formData.impulso} onChange={handleChange} required>
                            <option value="" selected disabled>Elija una opción</option>
                            <option value="Leve">Leve</option>
                            <option value="Moderado">Moderado</option>
                            <option value="Fuerte">Fuerte</option>
                            <option value="Intenso">Intenso</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="arranque">¿Arranqué? </label>
                    <input type="checkbox" name="arranque" checked={formData.arranque} onChange={handleChange} />
                </div>
                <button className="modal-add" type="submit">✔️</button>
            </form >
        
    </>
    );
}
