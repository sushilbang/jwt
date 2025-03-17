import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post("/api/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            await fetchUserDetails(response.data.token);
            toast.success("Logged in successfully! 🎉");
        } catch (error) {
            toast.error("Login failed! ❌ " + error.response?.data?.message);
        }
    };
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        toast.info("Logged out successfully! 👋");
    }

    const fetchUserDetails = async (token) => {
        try {
            const response = await axios.get("/api/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            setUser(response.data);
        } catch (error) {
            toast.error("Failed to fetch user details ❌");
            setUser(null);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            fetchUserDetails(token);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);