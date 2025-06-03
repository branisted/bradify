import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import TrackList from "../../components/TrackList/TrackList.jsx";
import Player from "../../components/Player/Player.jsx";
import styles from "./Home.module.css";

export default function Home() {
    const [tracks, setTracks] = useState([]);
    const [playingUris, setPlayingUris] = useState([]);
    const token = localStorage.getItem("spotify_access_token");

    const handleSearch = async (query) => {
        const res = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        setTracks(data.tracks?.items || []);
    };

    return (
        <div className={styles.mainBody}>
            <header className={styles.header}>
                <img src="/spotify-logo.svg" alt="Spotify" className={styles.logo} />
                <h1 className={styles.title}>Spotify Song Search & Player</h1>
            </header>
            <main className={styles.content}>
                <SearchBar onSearch={handleSearch} />
                <TrackList tracks={tracks} onPlay={uri => setPlayingUris([uri])} />
            </main>
            <footer className={styles.footer}>
                <Player token={token} uris={playingUris} />
            </footer>
        </div>
    );
}