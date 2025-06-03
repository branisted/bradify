// src/components/TrackList.jsx
export default function TrackList({ tracks, onPlay }) {
    if (!tracks.length) return null;
    return (
        <ul>
            {tracks.map(track => (
                <li key={track.id} style={{ marginBottom: 8 }}>
                    <img src={track.album.images[2]?.url} alt="" width={40} style={{ verticalAlign: "middle" }} />
                    <span style={{ marginLeft: 8 }}>{track.name} — {track.artists.map(a => a.name).join(", ")}</span>
                    <button style={{ marginLeft: 8 }} onClick={() => onPlay(track.uri)}>Play</button>
                </li>
            ))}
        </ul>
    );
}