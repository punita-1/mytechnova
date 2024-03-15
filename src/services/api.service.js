import { db } from "./firebase"
import { addDoc, collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"

export const saveUserData = (userData) => {
    return setDoc(doc(db, "users/" + userData.rollnumber), {
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

export const saveEventRegistrations = (teamName, eventId, membersCount, memberDetails, registeredBy) => {
    const temp = new Date().getMilliseconds();
    const docRef = collection(db, "registrations");
    const payLoad = {
        teamName: teamName,
        eventId: eventId,
        membersCount: membersCount,
        members: memberDetails,
        registeredBy: registeredBy
    }
    return addDoc(docRef, payLoad);
}

export const getEventsRegisteredByYou = (rollNumber) => {
    const q = query(collection(db, "registrations"), where("registeredBy", "==", rollNumber));
    return getDocs(q);
}