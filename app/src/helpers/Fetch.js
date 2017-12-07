const WS_URL = "http://localhost:8000/api"; 

const BASIC_CONFIG = {
    mode: "cors",
    headers: {
        "Content-Type": "application/json" 
    }
}

const Fetch =
{
    post(service, body)
    {
        return new Promise((resolve, reject) => {
            fetch(`${WS_URL}${service}`, {
                method: "POST",
                ...BASIC_CONFIG,
                body: JSON.stringify(body)
            })
            .then(response => resolve(response))
            .catch(err => reject(err));
        });
    },

    get(service)
    {
        return new Promise((resolve, reject) => {
            fetch(`${WS_URL}${service}`, {
                ...BASIC_CONFIG
            })
            .then(response => resolve(response))
            .catch(err => reject(err));
        });
    }
}

export default Fetch;