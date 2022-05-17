import { useEffect, useState } from 'react';

 const useInventories = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/inventorie')
            .then(res => res.json())
            .then(data => {
                setInventorys(data)
                setIsLoading(false)
            });
    }, []);
    return [inventorys, isLoading, setInventorys]
 }

 export default useInventories;