import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth } from "./firebase"


export const currentUser = () => {
    return auth.currentUser;
}

export const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then((res) => {
        return res.user;
    }).catch((err) => {
        return err;
    })
}

export const logout = () => {
    return signOut(auth).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export const profile = (user, name, phone, rollno, org, branch, sem) => {
    return updateProfile(user, {
        displayName: name,
        phoneNumber: phone,
        photoURL: phone + "?" + rollno + "?" + org + "?" + branch + "?" + sem
    }).then((res) => {
        return res;
    }).catch((err) => {
        return err;
    })
}

export const verifyEmail = (user) => {
    return sendEmailVerification(user);
}