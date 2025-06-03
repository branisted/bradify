import styles from "./TrackList.module.css";

export default function TrackList({ tracks, onPlay }) {
    if (!tracks.length) return null;
    return (
        <ul className={styles.list}>
            {tracks.map(track => (
                <li key={track.id} className={styles.item}>
                    <img
                        src={track.album.images[2]?.url}
                        alt={track.name}
                        className={styles.albumArt}
                    />
                    <div className={styles.info}>
                        <span className={styles.trackName}>{track.name}</span>
                        <span className={styles.artistName}>
                            {track.artists.map(a => a.name).join(", ")}
                        </span>
                    </div>
                    <button
                        className={styles.playButton}
                        onClick={() => onPlay(track.uri)}
                    >
                        ▶ Play
                    </button>
                </li>
            ))}
        </ul>
    );
}