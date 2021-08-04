import React from 'react';
import { Result, Button } from 'antd';
import {Link} from 'react-router-dom';

const Error404 = () =>{
    return(
        <Result 
            className="error404-container"
            status="404" 
            title="No hay resultados!" 
            subTitle="Perdón, lo que busca no existe."
                extra={ <Link to ="/Home"><Button type="primary"> Inicio</Button></Link>}
        />
    ) 
}

export default Error404;