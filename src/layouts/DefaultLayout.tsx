import { useNavigate } from "react-router-dom";
import type { JSX } from "react";


export default function DefaultLayout({ children }: { children: JSX.Element }) {
    const navigate = useNavigate();
    return (
    <div>
        <main>{children}</main>
        <footer className="footer">
            <button onClick={() => navigate("/registro")}>Registro</button>
            <button onClick={() => navigate("/reflexion")}>Reflexiones</button>
        </footer>
    </div>);
}