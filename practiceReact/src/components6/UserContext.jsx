import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
      const [user, setUser] = useState({ name: "Keshav Awasthi" });
      const updateUser = (newname) => {
            setUser({ name: newname })
      }

      return <UserContext.Provider value={{ user, updateUser }}>
            {children}
      </UserContext.Provider>
}