import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormProvider } from './context/formContext.jsx'; // Importa correctamente el FormProvider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
