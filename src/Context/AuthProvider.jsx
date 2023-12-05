/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
    
    
} from "firebase/auth";
const auth = getAuth(app)
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logIn = (email, password) =>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signUp = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    
    
   
    
    const signInUsingGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }
     const logOut = () =>{
        setLoading(true);
        return signOut(auth)

    };
    
  
   

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // console.log('current user', );
            setUser(currentUser);
            setLoading(false);
         });
        return () =>{
           unSubscribe();
        }
    }, [])  
    
    const authInfo = {
        user,
        loading,
        logIn,
        signUp,
        signInUsingGoogle,
        logOut,
        
    }
    
    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;