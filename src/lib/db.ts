import { openDB } from 'idb';
import type { DBSchema, IDBPDatabase } from 'idb';

export interface KeepFunctions{
    toRegistro: ()=>void;
    toReflexion:()=>void;
}
export interface Registro {
    id?: number;
    lugar: string;
    emocion: string;
    impulso: string;
    arranque: boolean;
    estrategia: string;
    pensamiento: string;
}

export interface Reflexion {
    fecha: string; // formato YYYY-MM-DD
    queAyudo: string;
    momentoDificil: string;
    queProbar: string;
}

interface TricoDB extends DBSchema {
    registro: {
        key: number;//Será la fecha
        value: Registro;
    };
    reflexion: {
        key: string;
        value: Reflexion;
    };
}
const DB_NAME = 'keepmyhairDB';
const DB_VERSION = 1;
const STORE_REGISTRO = "registro";
const STORE_REFLEXION = "reflexion";


export async function initDB(): Promise<IDBPDatabase<TricoDB>> {
    return await openDB<TricoDB>(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_REGISTRO)) {
                db.createObjectStore(STORE_REGISTRO, { keyPath: 'id', autoIncrement: true });
            }
            if (!db.objectStoreNames.contains(STORE_REFLEXION)) {
                db.createObjectStore(STORE_REFLEXION, { keyPath: 'fecha' });
            }
        }
    })
}


//Registros
export const addRegistro = async (registro: Registro) => {//Añadir registro
    const db = await initDB();
    await db.add(STORE_REGISTRO, registro);
};

export const getRegistro = async (id:number)=>{
    const db = await initDB();
    return await db.get(STORE_REGISTRO, id);
};

export const getAllRegistros = async (): Promise<Registro[]> => {//Obtener todos los registros
  const db = await initDB();
  return await db.getAll(STORE_REGISTRO);
};

export const deleteRegistro = async (id: number) => {//Eliminar un solo registro
    const db = await initDB();
    await db.delete(STORE_REGISTRO, id);
};

export const editRegistro = async (registro: Registro) => {//editar un solo registro
    const db = await initDB();
    db.put(STORE_REGISTRO,registro);
};


//Reflexiones
export const addReflexion = async (reflexion: Reflexion) => {
  const db = await initDB();
  await db.put(STORE_REFLEXION, reflexion);
};
export const getReflexion = async (fecha:string)=>{
    const db = await initDB();
    return await db.get(STORE_REFLEXION, fecha);
};
export const getAllReflexiones = async (): Promise<Reflexion[]> => {
  const db = await initDB();
  return await db.getAll(STORE_REFLEXION);
};
export const deleteReflexion = async (fecha: string) => {
    const db = await initDB();
    db.delete(STORE_REFLEXION, fecha);
};
export const editReflexion = async (reflexion: Reflexion) => {
    const db = await initDB();
    db.put(STORE_REFLEXION,reflexion);
};