import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../firebase/Firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const  signIn =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in thise auth sate change',createUser);
            SetUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    })
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;