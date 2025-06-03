// src/components/Player.jsx
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ token, uris }) {
    if (!token || !uris.length) return null;
    return (
        <SpotifyPlayer
            token={token}
            uris={uris}
            autoPlay={true}
            showSaveIcon
            styles={{
                activeColor: "#1db954",
                color: "black",
                loaderColor: "#fff",
                sliderColor: "#1db954",
                trackArtistColor: "#ccc",
                trackNameColor: "#fff",
            }}
        />
    );
}