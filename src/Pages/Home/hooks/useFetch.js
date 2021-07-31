import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options) => {

    const [ loading, setLoading ] = useState(true);
    const [ result, setResult ] = useState(null);
    const [ error, setError ] = useState(null);
    
    useEffect(() =>{
        const getData = async () =>{
            try {
                const res = await axios.get(url, options);
                setResult(res.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        getData();
    }, [url, options])
    
    return {loading, result, error};
}

export default useFetch;