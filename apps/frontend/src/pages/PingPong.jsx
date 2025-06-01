import React, { useEffect, useState } from 'react';

function PingPong() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        fetch('http://localhost:3001/ping')
            .then((res) => res.text())
            .then((data) => setMessage(data))
            .catch(() => setMessage('Error connecting to backend'));
    }, []);

    return <div>{message}</div>;
}

export default PingPong;