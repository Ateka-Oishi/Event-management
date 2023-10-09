/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    GoogleAuthProvider
    
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)

    };
    const signInUsingGoogle = () => {
        setLoading(true)
        const GoogleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, GoogleProvider)
     }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
         });
        return () =>{
           unSubscribe();
        }
    }, [])  
    
    const authInfo = {
        user,
        signUp,
        loading,
        logIn,
        logOut,
        signInUsingGoogle

    }
    
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;