// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0WPoWhHjd8pIb86T9f8hAQqQrLTy2xOo",
  authDomain: "hey-eureka.firebaseapp.com",
  projectId: "hey-eureka",
  storageBucket: "hey-eureka.appspot.com",
  messagingSenderId: "85047605601",
  appId: "1:85047605601:web:872a7b793f5bb17ef36d20"
};

//Iniciar firebase en mi proyecto
const FirebaseApp = initializeApp (firebaseConfig);

export default FirebaseApp