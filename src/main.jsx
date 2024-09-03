import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyABZY2fs1p-nI3K2TcBxlt1BdLbKi50Ls4',
    authDomain: 'ignis-products.firebaseapp.com',
    projectId: 'ignis-products',
    storageBucket: 'ignis-products.appspot.com',
    messagingSenderId: '485414845213',
    appId: '1:485414845213:web:fb12e15c297aff9210fff4',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
