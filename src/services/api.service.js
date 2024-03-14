import { db } from "./firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"

export const saveUserData = (userData) => {
    return addDoc(doc(db, "users/" + userData.rollnumber), {
        name: userData.name,
        phone: userData.phone,
        emailUsername: userData.email,
        org: userData.organization,
        branch: userData.branch,
        sem: userData.semester
    }).then((result)=> {
        return result;
    }).catch((error)=> {
        return error;
    });
}

export const saveEventRegistrations = (teamName, membersCount, memberDetailts) => {
    addDoc(ref)
}