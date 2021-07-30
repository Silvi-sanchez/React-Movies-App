import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import './Footer.css';


const Footer = () => {

    const { Footer } = Layout;

    return (
        <Footer className="footer">
            <p className="texto">
                Raquel Muriega y Silvina Sánchez
            </p>
        </Footer>
    );
}

export default Footer;
