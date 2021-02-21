import axios from "axios";
import {useState, useEffect} from 'react';

export const useHttp = (url, METHOD = 'get', options = {}) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true);
        axios({
            method: METHOD,
            url: url,
            data: options
        })
            .then(res =>{
                console.log(res.data);
                setResponse(res.data);
                setLoading(false);
            })
            .catch(e => setError(e));
    },[]);

    return {response, error, loading};
}