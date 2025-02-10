// src/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext<{
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    logout: () => void;
} | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
