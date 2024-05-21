const API_URL = "http://localhost:3500/item"; - url depends on JSON server 

useEffect(() => { const fetchItem = async () => {
    try {const response = await fetch (API_URL);
    
    if (!response.ok) throw Error("Did not receive data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
    }

    catch (err) {
        setFetchError(err.message);
    }

    finally {
        return errMsg;
    }

}; 

(async () => await fetchItem())();

}, []);