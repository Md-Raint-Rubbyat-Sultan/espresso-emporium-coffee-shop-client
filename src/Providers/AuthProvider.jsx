import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
    const [user, setUser] = useState(() => null);
    const [loading, setLoading] = useState(() => true);

    const createUser = (email, password) => {
        setLoading(() => true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(() => true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(() => true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(() => true);
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        setLoading(() => true);
        return updateProfile(auth.currentUser, profile)
    }

    const resetPassword = (email) => {
        setLoading(() => true);
        return sendPasswordResetEmail(auth, email);
    }

    const deleteUserProfile = () => {
        setLoading(() => true);
        return deleteUser(auth?.currentUser);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(() => currentUser);
            setLoading(() => false);
        });
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut,
        updateUserProfile,
        resetPassword,
        deleteUserProfile,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;