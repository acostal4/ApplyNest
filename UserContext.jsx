// /context/UserContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
const [user, setUser] = useState(null);

useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, setUser);
return () => unsubscribe();
}, []);

const logout = () => signOut(auth);

return (
<UserContext.Provider value={{ user, logout }}>
{children}
</UserContext.Provider>
);
};
