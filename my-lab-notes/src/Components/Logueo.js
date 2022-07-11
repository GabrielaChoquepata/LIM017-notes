import { useState } from "react";
import firebaseApp from "../credenciales";
import { getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithRedirect,
        GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

//se incializa firebase auth en mi app
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Logueo = () => {
    const navigate = useNavigate();
    const [estaRegistrandose, setEstaregistrandose] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [error, setError] = useState("");
    //console.log(email, password);

    function submitHandler(e) {
        //console.log(email, password);
        e.preventDefault();

        if (estaRegistrandose) {
            //si se registra
            createUserWithEmailAndPassword(auth, email,password)
            .then(userCredential => {
                setUser(userCredential.user.email)
                navigate ("/home")
            })
            .catch((error) => {
                console.log(error)
        });

        } else {
            //si esta iniciando sesión
            signInWithEmailAndPassword(auth, email, password)
            .then (userCredential=> {
                setUser(userCredential.user.email)
                navigate ("/home")
            })
            .catch ((error) => {
                console.log(error.code);
                if (error.code === "auth/internal-error") {
                    setError("Correo inválido")
                };
                if (error.code === "") {
                    setError("Campos vacíos. Ingrese correo y contraseña")
                };
                if (error.code === "auth/user-not-found'") {
                    setError("Usuario no registrado")
                };
                if (error.code === "auth/wrong-password") {
                    setError("Contraseña inválida. Intente nuevamente")
                };
                if (error.code === "auth/invalid-email") {
                    setError("Ingrese un correo válido")
                };
                if (error.code === "default") {
                    setError("Otro error")
                }
            });
        }
    };

    function LoginGoogleSignIn (e) {
        signInWithRedirect (auth, googleProvider)
        navigate ("/home")
    }

    return (

    <div className="w-full max-w-xs m-auto object-center font-LouisGeorge">
        <h1>{estaRegistrandose ? "Registrate" : "Inicia Sesión"}</h1>
        <form onSubmit={submitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <input
                    type="text"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="correo@mail.com"
                    onChange={e =>setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="******"
                    onChange={e =>setPassword(e.target.value)}
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                {estaRegistrandose ? "Registrate" : "Inicia Sesión"}
                </button>
            </div>
            {error && <p className="bg-red-120 border border-red-400 text-red-700 px-4 py3 rounded relative mt-3 mb-4 text-center">{error}</p>}
        </form>

        <button
            className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
            type="submit"
            onClick={LoginGoogleSignIn}
            >
            Acceder con Google
        </button>

        <button
            className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
            onClick={() => setEstaregistrandose(!estaRegistrandose)}
            >
            {estaRegistrandose ? "¿Ya tienes cuenta? Inicia Sesión" : "¿No tienes cuenta? Registrate"}
        </button>

    </div>
    );

};

export default Logueo;