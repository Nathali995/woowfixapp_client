import * as React from 'react';
import AppNavigation from './src/app/presentation/navigation/AppNavigation';
import { AuthProvider } from './src/app/presentation/contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  )
}

export default App;
