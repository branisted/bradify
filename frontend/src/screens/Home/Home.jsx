import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import TrackList from "../../components/TrackList/TrackList.jsx";
import Player from "../../components/Player/Player.jsx";

export default function Home() {
    const [tracks, setTracks] = useState([]);
    const [playingUris, setPlayingUris] = useState([]);
    const token = localStorage.getItem("spotify_access_token"); // Or however you store it

    const handleSearch = async (query) => {
        const res = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
            { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        setTracks(data.tracks?.items || []);
    };

    return (
        <div style={{ padding: 32 }}>
            <h1>Spotify Song Search & Player</h1>
            <SearchBar onSearch={handleSearch} />
            <TrackList tracks={tracks} onPlay={uri => setPlayingUris([uri])} />
            <Player token={token} uris={playingUris} />
        </div>
    );
}