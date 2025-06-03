import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search for a song, artist, or album"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className={styles.input}
            />
            <button type="submit" className={styles.button}>Search</button>
        </form>
    );
}