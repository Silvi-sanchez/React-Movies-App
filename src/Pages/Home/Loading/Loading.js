import React from 'react';
import { Spin } from 'antd';
import 'antd/dist/antd.css';

import './Loading.css'

const Loading = () => {
    return (
        <div className="loading">
            <Spin size="large" />
        </div>
    );
}

export default Loading;