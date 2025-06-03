import styles from "./Login.module.css";

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
        window.location = url;
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <img
                    src="/spotify-logo.svg"
                    alt="Spotify Logo"
                    className={styles.logo}
                />
                <h1 className={styles.title}>Spotify Clone</h1>
                <button className={styles.loginButton} onClick={handleLogin}>
                    <span className={styles.spotifyIcon}>🎵</span>
                    Login with Spotify
                </button>
            </div>
        </div>
    );
}

export default Login;