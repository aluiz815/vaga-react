import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
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
    const response = await api.get(`/users?username=${username}&password=${password}`);
    const { token,name,avatar} =response.data[0]
    const user = {name,avatar}
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setData();
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