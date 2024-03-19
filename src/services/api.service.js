import { db } from "./firebase"
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore"

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

export const saveEventRegistrations = (teamName, eventId, membersCount, memberDetails, memberRolls, registeredBy) => {
    // const temp = new Date().getMilliseconds();
    const docRef = collection(db, "registrations");
    const payLoad = {
        teamName: teamName,
        eventId: eventId,
        membersCount: membersCount,
        members: memberDetails,
        memberRolls: memberRolls,
        registeredBy: registeredBy
    }
    return addDoc(docRef, payLoad);
}

export const getEventsRegisteredByYou = (rollNumber) => {
    const q = query(collection(db, "registrations"), where("registeredBy", "==", rollNumber));
    return getDocs(q);
}

export const deleteEventById = (id) => {
    const docRef = doc(db, "registrations", id);
    return deleteDoc(docRef);
}

export const getEventsRegisterationsByEventId = (eventId) => {
    const q = query(collection(db, "registrations"), where("eventId", "==", eventId));
    return getDocs(q);
}
