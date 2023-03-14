import { createContext, useState } from "react";

const User = createContext()

export function UserContexProvaider({ children }) {
    const [user, setUser] = useState({
        "username": undefined,
        "password": undefined
    })
    return (
        <User.Provider value={{ user, setUser }}>
            {children}
        </User.Provider>
    )
}
export default User
