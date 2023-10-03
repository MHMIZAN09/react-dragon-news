import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../firebase/Firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, SetUser] = useState(null);
    const [loading,setLoading] =useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const  signIn =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in thise auth sate change',createUser);
            SetUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe();
        }
    })
    const authInfo = {
        user,
        loading,
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