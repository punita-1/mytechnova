import { db } from "./firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"

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

export const saveEventRegistrations = (teamName, eventId, eventName, membersCount, memberDetails) => {
    const temp = new Date().getMilliseconds();
    const docRef = doc(db, "registrations", teamName+membersCount+temp);
    const payLoad = {
        teamName: teamName,
        eventId: eventId,
        eventName: eventName,
        membersCount: membersCount,
        members: memberDetails
    }
    return setDoc(docRef, payLoad);
}