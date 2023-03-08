import { createContext, useState } from "react";

const User = createContext()

export function UserContexProvaider({ children }) {
    const [user, setUser] = useState({
        "user-name": "",
        "user-password": ""
    })
    return (
        <User.Provider value={{ user, setUser }}>
            {children}
        </User.Provider>
    )
}
export default User
