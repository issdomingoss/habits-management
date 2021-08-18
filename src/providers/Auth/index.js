import { createContext, useState } from "react";

export const AuthTokenContext = createContext();

export const AuthTokenProvider = ({ children }) => {
    
    const [ authN, setAuthN ] = useState(false);

    return(
        <AuthTokenContext.Provider value={ { authN, setAuthN } }>
            {children}
        </AuthTokenContext.Provider>
    );
};