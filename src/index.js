import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layouts/Header';
import Content from './Content';
import Footer from './Components/Layouts/Footer';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Content>
            
           
            </Content>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>


);
