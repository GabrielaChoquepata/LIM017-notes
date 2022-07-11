import firebaseApp from "../credenciales"
import { getAuth,
        signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import AgregarNotas from "../Components/AgregarNotas"
import ListadoNotas from "../Components/ListadoNotas"

const auth = getAuth(firebaseApp);

const Home = () => {

    const navigate = useNavigate();
    function handleLogout(e) {
        signOut(auth)
            .then(() => {
                navigate ("/")
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="w-full max-w-xs m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1>Hola estas en home</h1>
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleLogout}>Cerrar Sesión
        </button>
        <div>
            <AgregarNotas/>
            <ListadoNotas/>


        </div>
        </div>
    )
}

export default Home