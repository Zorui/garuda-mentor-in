import React, { useState, createContext } from 'react';

export const UserContext = createContext();
const Provider = UserContext.Provider;

const UserProvider = ({children}) => {
    let [logState, setLogState] = useState(false);
    
    return(
        <Provider value={[logState, setLogState]}>
            {children}
        </Provider>
    )
}

export default UserProvider;