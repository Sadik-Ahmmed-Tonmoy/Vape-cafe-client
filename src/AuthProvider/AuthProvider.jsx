import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  //   google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // update user name and image
  const updateUserNameAndImage = (name, image) => {
    setLoading(true)
return updateProfile(auth.currentUser, {
  displayName: name, photoURL: image
})
  }

  // Login user
  const logIn = (email, password) => {
return signInWithEmailAndPassword(auth, email, password)
  }

  //   logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
   
        setUser(currentUser);
        setLoading(false);
      
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //  all information
  const authInfo = {
    user,
    loading,
    refetch,
    setRefetch,
    createUser,
    updateUserNameAndImage,
    logIn,
    googleLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{ children }</AuthContext.Provider>
  );
};

export default AuthProvider;
