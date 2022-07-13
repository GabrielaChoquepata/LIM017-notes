import { useState } from "react";
import { db } from '../credenciales';
import { collection,
        addDoc } from 'firebase/firestore'

function AgregarNotas() {
  const [title,setTitle] = useState("");

  function handleSubmit (e) {
    e.preventDefault();
    if (title !== ""){
      addDoc(collection(db,localStorage.getItem("user")),{
        title,
      });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Escribe tu gran idea :)"
          onChange={e =>setTitle(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300
                    text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                    type="submit"
        >Añadir</button>
      </div>
    </form>
  )
}

export default AgregarNotas