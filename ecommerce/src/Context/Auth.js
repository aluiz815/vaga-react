import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import { toast } from "react-toastify";
const authContext = createContext({});

const AuthProvider= ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      return { token, user:JSON.parse(user) };
    }
    return;
  });
  const signIn = useCallback(async ({ username, password }) => {
    try {
      const response = await api.get(`/users?username=${username}&password=${password}`);
    const { token,name,avatar} =response.data[0]
    const user = {name,avatar}
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setData({ token, user });
    toast.success('Usuario Autenticado Com Sucesso')
    } catch (error) {
      toast.error("Falha na autenticacao, verifique seus dados");
    }
  }, []);

  const signOut = useCallback(() => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setData();
      toast.success("Usuario Desconectado Com Sucesso");
    } catch (error) {
      toast.error("Falha no Logout");
    }
    
  }, []);
  return (
    <authContext.Provider value={{ signIn, user:data, signOut }}>
      {children}
    </authContext.Provider>
  );
};

function useAuth() {
  const context = useContext(authContext);
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };