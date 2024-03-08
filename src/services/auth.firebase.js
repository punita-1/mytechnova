import { app } from "./firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const signUpUser = (data)