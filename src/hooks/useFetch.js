import { useEffect, useState } from "react";

export default function useFetch (url) {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(url)
          .then(res => {
            if (!res.ok) {
              throw Error('Something went wrong!');
            }
            return res.json();
          })
          .then(data => {
            setError(false);
            setLoading(false);
            return setData(data);
            })
          .catch(e => {
            setError(e.message);
          })
    }, [url]);
    return { data, loading, error };
}