import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Callback() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');
        if (code) {
            fetch(`api/spotify/token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code }),
            })
                .then(res => res.json())
                .then(data => {
                    // Store tokens securely (for demo, localStorage)
                    localStorage.setItem('spotify_access_token', data.access_token);
                    localStorage.setItem('spotify_refresh_token', data.refresh_token);
                    navigate('/'); // Redirect to home or wherever
                })
                .catch(() => {
                    // Handle error (optional: show message)
                    navigate('/login');
                });
        } else {
            navigate('/login');
        }
    }, [navigate]);

    return <div>Logging in...</div>;
}

export default Callback;