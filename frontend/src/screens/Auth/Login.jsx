// src/screens/Auth/Login.jsx
const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-read-playback-state',
    'user-modify-playback-state'
];

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

function Login() {
    const handleLogin = () => {
        const authEndpoint = 'https://accounts.spotify.com/authorize';
        const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=code&show_dialog=true`;
        console.log(url);
        window.location = url;
    };

    return (
        <div>
            <button onClick={handleLogin}>Login with Spotify</button>
        </div>
    );
}

export default Login;