import SpotifyPlayer from "react-spotify-web-playback";
import styles from "./Player.module.css";

export default function Player({ token, uris }) {
    if (!token || !uris.length) return null;
    return (
        <div className={styles.playerBar}>
            <SpotifyPlayer
                token={token}
                uris={uris}
                autoPlay={true}
                showSaveIcon
                styles={{
                    activeColor: "#1db954",
                    color: "#fff",
                    loaderColor: "#1db954",
                    bgColor: "#181818",
                    sliderColor: "#1db954",
                    trackArtistColor: "#ccc",
                    trackNameColor: "#fff",
                    height: 72,
                    sliderHandleColor: "#fff",
                }}
            />
        </div>
    );
}