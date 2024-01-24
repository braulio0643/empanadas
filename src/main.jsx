import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './chakra';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyUo-tJBximTZNmdgYPMhd2KuYLyAqWHQ",
  authDomain: "empanadas-f9e0a.firebaseapp.com",
  projectId: "empanadas-f9e0a",
  storageBucket: "empanadas-f9e0a.appspot.com",
  messagingSenderId: "746306894528",
  appId: "1:746306894528:web:4d3e70ad015f9d575c8b25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
        <App/>
    </ChakraProvider>
)
