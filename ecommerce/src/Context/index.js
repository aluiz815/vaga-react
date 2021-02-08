import React from 'react';
import { AuthProvider } from './Auth';
import { CartProvider } from './Cart';

const AppProvider= ({ children }) => (
  <CartProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </CartProvider>
);

export default AppProvider;