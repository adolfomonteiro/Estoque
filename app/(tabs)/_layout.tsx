import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/Header';
import { Login } from '../pages/Auth/login';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    <Login />
     <Header />
    </>
  );
}
